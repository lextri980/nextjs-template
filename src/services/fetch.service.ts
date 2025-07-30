/**
 * Api service from fetch
 */
class FetchService {
  /**
   * Calling fetch
   * @param apiUrl string
   * @returns Promise
   */
  public static async fetcher(apiUrl: string) {
    const response = await fetch(`${process.env.BASE_URL}${apiUrl}`);
    return response.json();
  }
}

export default FetchService;
