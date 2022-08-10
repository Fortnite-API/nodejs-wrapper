import { Language } from './enums';

export type RequestQueryParams = Record<string, string>;

export interface ClientConfig {
  /**
   * Your Fortnite-API.com API key. An API key is required to fetch battle royale stats
   *
   * Can be obtained at https://dash.fortnite-api.com/account
   */
  apiKey?: string;

  /**
   * The default language for all endpoints. Defaults to 'en'
   */
  language: Language;
}

export interface ClientOptions extends Partial<ClientConfig> {}
