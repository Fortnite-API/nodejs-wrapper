/**
 * Represets an error thrown because an endpoint that requires an API key was called without one
 */
class MissingAPIKeyError extends Error {
  /**
   * The url of the requested API endpoint
   */
  public url: string;

  /**
   * @param url The url of the requested API endpoint
   */
  constructor(url: string) {
    super();
    this.name = 'MissingAPIKeyError';
    this.message = `The endpoint "${url}" requires an API key. Please provide one in the client config`;

    this.url = url;
  }
}

export default MissingAPIKeyError;
