/* eslint-disable no-restricted-syntax */
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import rateLimit, { RateLimitedAxiosInstance } from 'axios-rate-limit';
import { version } from '../../package.json';
import Client from '../client/Client';
import FortniteAPIError from '../exceptions/FortniteAPIError';
import InvalidAPIKeyError from '../exceptions/InvalidAPIKeyError';
import MissingAPIKeyError from '../exceptions/MissingAPIKeyError';
import { serializeParams } from '../util/util';
import { FortniteAPIResponseData } from './httpStructs';

class HTTP {
  public client: Client;
  public axios: AxiosInstance;
  public statsAxios: RateLimitedAxiosInstance;
  constructor(client: Client) {
    this.client = client;

    this.axios = axios.create({
      method: 'GET',
      baseURL: 'https://fortnite-api.com',
      headers: {
        ...process.env.IS_BROWSER !== 'true' ? {
          'User-Agent': `fnapicom/${version}`,
        } : {},
        ...typeof this.client.config.apiKey === 'string' ? {
          Authorization: this.client.config.apiKey,
        } : {},
      },
    });

    this.statsAxios = rateLimit(this.axios, {
      maxRequests: 3,
      perMilliseconds: 1100 + this.client.config.rateLimitExtraTimeout,
    });
  }

  private async fetchWithInstance(instance: AxiosInstance, url: string, params?: any): Promise<FortniteAPIResponseData> {
    const config: AxiosRequestConfig = {
      url,
      params,
      paramsSerializer: serializeParams,
    };

    try {
      const response = await this.axios(config);

      return response.data;
    } catch (e) {
      if (e instanceof AxiosError && e.response?.data?.error) {
        if (e.response.status === 401) {
          if (this.client.config.apiKey) {
            throw new InvalidAPIKeyError(url);
          } else {
            throw new MissingAPIKeyError(url);
          }
        }

        throw new FortniteAPIError(e.response.data, config, e.response.status);
      }

      throw e;
    }
  }

  public async fetch(url: string, params?: any): Promise<FortniteAPIResponseData> {
    return this.fetchWithInstance(this.axios, url, params);
  }

  public async fetchStats(url: string, params?: any): Promise<FortniteAPIResponseData> {
    return this.fetchWithInstance(this.statsAxios, url, params);
  }
}

export default HTTP;
