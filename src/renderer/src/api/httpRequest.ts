import axios from 'axios'

import config from '@config/config.json';

const httpService = axios.create({
  baseURL: `${config.server.url || 'http//localhost'}:${config.server.port || 8000}/`,
  timeout: 5000
})

const token = "";
httpService.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `${token}`;
    config.headers['Content-Type'] = "application/json";
    config.headers['AcceptAccess-Control-Request-Menthod'] = '*'; 
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

const request = (method: 'get' | 'post' | 'put' | 'delete', url: string, paramsOrData?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    httpService({
      method,
      url,
      params: method === 'get' ? paramsOrData : undefined,
      data: method !== 'get' ? paramsOrData : undefined
    }).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
};

export default request;