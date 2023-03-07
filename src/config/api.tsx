import axios, { AxiosRequestConfig } from 'axios';

import { API_TIMEOUT, BASE_API_URL } from './constants';

const createApiInstance = (baseURL: string, timeout = API_TIMEOUT) =>
  axios.create({
    baseURL,
    timeout,
  });

const headerConfig = (request: AxiosRequestConfig) => {
  return request;
};

const api = createApiInstance(BASE_API_URL);

let requestsInterceptor: number = null;

// Initialize auth token. If given, set it; otherwise, fetch it from localStorage
export const initApiToken = async () => {
  // @todo Authentication here.
  const authToken = 'hardcoded-token';
  try {
    if (authToken) {
      const authHeader = `Bearer ${authToken}`;
      api.defaults.headers.common['Authorization'] = authHeader;

      // remove previous interceptors with outdated token
      if (requestsInterceptor !== null) {
        api.interceptors.request.eject(requestsInterceptor);
      }

      requestsInterceptor = api.interceptors.request.use(function (config) {
        config.headers.Authorization = authHeader;
        return config;
      });
    }
  } catch (e) {
    console.log(e);
  }

  api.interceptors.request.use(headerConfig);

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    },
  );
};

export const authApi = () => {
  return api;
};
