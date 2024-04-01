import axios from "axios";
import { getCsrfToken } from "../helpers";

import {
  applogicUrl,
  authUrl,
  tradeUrl,
  withCredentials,
  p2pUrl,
  invetsUrl,
  demoUrl,
  futureUrl,
} from "./config";

const getAPI = () => ({
  barong: authUrl(),
  p2p: `${p2pUrl()}`,
  applogic: `${applogicUrl()}`,
  peatio: `${tradeUrl()}`,
  future: `${futureUrl()}`,
  invest: `${invetsUrl()}`,
  demoSite: `${demoUrl()}`,
});

const buildRequest = (request, configData) => {
  const { body, method, url } = request;
  const { apiVersion, headers } = configData;
  const api = getAPI();
  const contentType =
    body instanceof FormData ? "multipart/form-data" : "application/json";

  const defaultHeaders = {
    "content-type": contentType,
    "X-CSRF-Token": getCsrfToken(),
  };
  const apiUrl = api[apiVersion];

  const requestConfig = {
    baseURL: apiUrl,
    data: body,
    headers: { ...headers, ...defaultHeaders },
    method,
    url,
    withCredentials: withCredentials(),
  };

  return requestConfig;
};

export const defaultResponse = {
  status: 500,
  data: {
    error: "Server error",
  },
};

export const formatError = (responseError) => {
  const response = responseError.response || defaultResponse;
  const errors =
    response.data && (response.data.errors || [response.data.error]);
  return {
    code: response.status,
    message: errors,
  };
};

export const makeRequest = async (request, configData) => {
  const requestConfig = buildRequest(request, configData);

  return new Promise((resolve, reject) => {
    const axiosRequest = axios(requestConfig);
    axiosRequest
      .then((response) => {
        if (configData.withHeaders) {
          resolve(response);
        } else {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(formatError(error));
      });
  });
};

/////////////////////////////////////////

const buildRequest2 = (request, configData) => {
  const { body, method, url, params } = request;
  const { apiVersion, headers } = configData;
  const api = getAPI();
  const contentType =
    body instanceof FormData ? "multipart/form-data" : "application/json";

  const defaultHeaders = {
    "content-type": contentType,
    "X-CSRF-Token": getCsrfToken(),
  };
  const apiUrl = api[apiVersion];

  const requestConfig = {
    baseURL: apiUrl,
    data: body,
    headers: { ...headers, ...defaultHeaders },
    method,
    url,
    params,
    withCredentials: withCredentials(),
  };

  return requestConfig;
};

export const formatError2 = (responseError) => {
  const response = responseError.response || defaultResponse;
  const errors =
    response.data && (response.data.errors || [response.data.error]);
  return {
    code: response.status,
    message: errors,
  };
};

export const makeRequest2 = async (request, configData) => {
  const requestConfig = buildRequest2(request, configData);

  return new Promise((resolve, reject) => {
    const axiosRequest = axios(requestConfig);
    axiosRequest
      .then((response) => {
        if (configData.withHeaders) {
          resolve(response);
        } else {
          resolve(response.data);
        }
      })
      .catch((error) => {
        reject(formatError(error));
      });
  });
};
