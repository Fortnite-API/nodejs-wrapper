import { AxiosRequestConfig } from 'axios';
import { FortniteAPIErrorData } from '../http/httpStructs';

/**
 * Represets a Fortnite-API HTTP error
 */
class FortniteAPIError extends Error {
  /**
   * The URL of the requested API endpoint
   */
  public url: string;

  /**
   * The HTTP status code
   */
  public httpStatus: number;

  /**
   * The request url query params sent by the client
   */
  public requestParams?: any;

  /**
   * @param error The raw Fortnite-API error data
   * @param request The client's request
   * @param status The response's HTTP status
   */
  constructor(error: FortniteAPIErrorData, request: AxiosRequestConfig, status: number) {
    super();
    this.name = 'FortniteAPIError';
    this.message = error.error;

    this.method = request.method?.toUpperCase() ?? 'GET'
    this.url = request.url!;
    this.httpStatus = status;
    this.requestParams = request.params;
  }
}

export default FortniteAPIError;
