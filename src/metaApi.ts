import { ApiWrapper } from './apiWrapper.js';

export class FacebookApi extends ApiWrapper {
  async getFacebookData(): Promise<Record<string, string>> {
    try {
      const result = await this.http.get(
        `https://graph.facebook.com/v19.0/me?fields=id%2Cname%2Clast_name&access_token=${process.env.FACEBOOK_USER_TOKEN}`,
      );
      console.log(`${new Date()}:`, result.data);
      return result.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: Error | any) {
      if (err.response.status === 401) {
        return { data: undefined };
      }

      throw err;
    }
  }
}
