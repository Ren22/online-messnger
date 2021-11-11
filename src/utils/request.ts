import { queryStringify } from './queryString';
import { GenericObject } from '../global/types';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

type Options = {
  headers: Record<string, string>,
  data?: GenericObject,
  method: string,
  withCredentials: boolean
}

export class Request {
  get<T>(url: string, options?: GenericObject, timeout?: number): Promise<T> {
    return this.request(url, { ...options, method: METHODS.GET }, timeout);
  }
  put<T>(url: string, options?: GenericObject, timeout?: number): Promise<T> {
    return this.request(url, { ...options, method: METHODS.PUT }, timeout);
  }
  post<T>(url: string, options?: GenericObject, timeout?: number): Promise<T> {
    return this.request(url, { ...options, method: METHODS.POST }, timeout);
  }
  delete<T>(url: string, options?: GenericObject, timeout?: number): Promise<T> {
    return this.request(url, { ...options, method: METHODS.DELETE }, timeout);
  }

  request = <T>(url: string, options: GenericObject, timeout = 5000): Promise<T> => {
    const {
      headers = {}, data, method, withCredentials,
    } = options as Options;
    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method provided for XHR'));
      }
      const xhr = new XMLHttpRequest();
      if (method === METHODS.GET && data) {
        const urlForGet = url + queryStringify(data);
        xhr.open(method, urlForGet);
      } else {
        xhr.open(method, url);
      }
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.responseType = 'json';
      if (withCredentials) {
        xhr.withCredentials = true;
      }
      xhr.onload = () => {
        const { status } = xhr;
        if (status === 0 || (status >= 200 && status < 400)) {
          // The request has been completed successfully
          resolve(xhr.response);
        } else {
          reject(new Error(`Failed to request data: ${xhr.status} ${xhr.statusText} ${xhr.response.reason}`));
        }
      };
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(queryStringify(data));
      }
    });
  }
}
