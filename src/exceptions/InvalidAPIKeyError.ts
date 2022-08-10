/**
 * Represets an error thrown because an endpoint that requires an API key was called with an invalid one
 */
class InvalidAPIKeyError extends Error {
  /**
   * The url of the requested API endpoint
   */
  public url: string;

  /**
   * @param url The url of the requested API endpoint
   */
  constructor(url: string) {
    super();
    this.name = 'InvalidAPIKeyError';
    this.message = `The endpoint "${url}" might require an API key. The API key provided is invalid`;

    this.url = url;
  }
}

export default InvalidAPIKeyError;
