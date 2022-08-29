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
   * The default language for all endpoints. Defaults to `en`
   */
  language: Language;

  /**
   * Extra timeout for stats ratelimits. Defaults to `0`.
   *
   * Normally the client will send 3 stats requests per 1100 milliseconds.
   * Setting this option to `100` increases the rate to 3 per 1200 milliseconds.
   *
   * You should increase this option if you're getting 429 responses
   */
  rateLimitExtraTimeout: number;
}

export interface ClientOptions extends Partial<ClientConfig> {}
