import { makeRequest, makeRequest2 } from './requestBuilder';
export * from './config';

export const API = {
  get: config => async url =>
    makeRequest(
      {
        method: 'get',
        url
      },
      config
    ),

  post: config => async (url, body) =>
    makeRequest( 
      {
        method: 'post',
        body,
        url
      },
      config
    ),

  patch: config => async (url, body) =>
    makeRequest(
      {
        method: 'patch',
        body,
        url
      },
      config
    ),

  put: config => async (url, body) =>
    makeRequest(
      {
        method: 'put',
        body,
        url
      },
      config
    ),

  delete: config => async (url, body) =>
    makeRequest(
      {
        method: 'delete',
        body,
        url
      },
      config
    ),
  get2: config => async (url, params) =>
    makeRequest2(
      {
        method: 'get',
        url,
        params
      },
      config
    )
};
