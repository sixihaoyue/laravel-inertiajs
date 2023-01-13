import axios from 'axios';

export default class Request {
  buildUrl = (url: string) => {
    return url;
  };

  request(defaultOptions: any = {
  }) {
    return {
      get: (url: string, options: any = {}): Promise<any> => {
        return axios.get(this.buildUrl(url), {...defaultOptions, ...options});
      },
      delete: (url: string, options?: any): Promise<any> => {
        return axios.delete(this.buildUrl(url), {...defaultOptions, ...options});
      },
      head: (url: string, options?: any): Promise<any> => {
        return axios.head(this.buildUrl(url), {...defaultOptions, ...options});
      },
      options: (url: string, options?: any): Promise<any> => {
        return axios.options(this.buildUrl(url), {...defaultOptions, ...options});
      },
      post: (url: string, data: any, options: any = {}): Promise<any> => {
        return axios.post(this.buildUrl(url), data, {...defaultOptions, ...options});
      },
      put: (url: string, data: any, options?: any): Promise<any> => {
        return axios.put(this.buildUrl(url), data, {...defaultOptions, ...options});
      },
      patch: (url: string, data: any, options?: any): Promise<any> => {
        return axios.patch(this.buildUrl(url), data, {...defaultOptions, ...options});
      },
    };
  }
}
