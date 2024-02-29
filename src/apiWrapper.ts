import axios from 'axios';
import axiosRateLimit, { RateLimitedAxiosInstance } from 'axios-rate-limit';

export class ApiWrapper {
  http: RateLimitedAxiosInstance | null;

  constructor() {
    // @ts-expect-error/typing issues
    this.http = axiosRateLimit(axios.create(), {
      maxRequests: 1,
      perMilliseconds: 2000,
    });
  }
}
