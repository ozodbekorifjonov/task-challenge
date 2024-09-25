import axios, {
  AxiosProgressEvent,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { getJwt } from '../jwt';
import { SearchQueryObject } from '../objectToURLSearchParams';
import { BaseUrl, isProd } from '../../constants';

export type RequestResponseSuccess<Result> = {
  status: 'success';
  result: Result;
};

export type RequestResponseFail = {
  status: 'fail';
  message: string;
};

export type RequestResponse<Result, Meta> =
  | (RequestResponseSuccess<Result> & Meta)
  | RequestResponseFail;

export type RequestBodyJsonObject = {
  [key: string]:
    | string
    | number
    | undefined
    | null
    | object
    | boolean
    | Array<number>;
};

export type RequestBodyJsonArray = RequestBodyJsonObject[];

export type RequestHeaders = {
  [key: string]: string;
};

export type RequestParams = {
  endpoint: string;
  query?: SearchQueryObject;
  baseUrl?: BaseUrl;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  responseType?: 'json' | 'blob';
  body?: RequestBodyJsonObject | RequestBodyJsonArray | FormData;
  signal?: AbortSignal;
  customToken?: string;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

const redirectBaseUrl = (baseUrl: string | undefined) => {
  if (!isProd || !baseUrl) {
    return baseUrl;
  }

  switch (baseUrl) {
    case BaseUrl.Merchant:
      return import.meta.env.VITE_BASE_API_URL + BaseUrl.Merchant;
    case BaseUrl.TempMerchant:
      return import.meta.env.VITE_BASE_TEMP_API_URL + BaseUrl.TempMerchant;
    case BaseUrl.Global:
      return import.meta.env.VITE_BASE_API_URL + BaseUrl.Global;
    case BaseUrl.Sanctum:
      return import.meta.env.VITE_BASE_API_URL + BaseUrl.Sanctum;
    case BaseUrl.Frontend:
      return import.meta.env.VITE_BASE_API_EIMZO_OPEN_URL + BaseUrl.Frontend;
    default:
      return baseUrl;
  }
};

export default async function request<Result, Meta = Record<string, never>>(
  params: RequestParams,
): Promise<RequestResponseSuccess<Result> & Meta> {
  const baseUrl = redirectBaseUrl(params.baseUrl);
  let url = `${baseUrl}/${params.endpoint}`;

  if (params.query) {
    const queryString = new URLSearchParams(params.query as never).toString();
    url += `?${queryString}`;
  }

  const headers: RequestHeaders = {
    Accept: 'application/json',
  };

  const token = params.customToken || getJwt();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const axiosConfig: AxiosRequestConfig = {
    url: url.toString(),
    method: params.method,
    headers,
    responseType: params.responseType || 'json',
    signal: params.signal,
    withCredentials: true,
    onUploadProgress: params.onUploadProgress,
  };

  if (params.body) {
    if (params.body instanceof FormData) {
      axiosConfig.data = params.body;
    } else {
      axiosConfig.data = JSON.stringify(params.body);
      headers['Content-Type'] = 'application/json';
    }
  }

  return axios(axiosConfig)
    .then((response: AxiosResponse<RequestResponse<Result, Meta>>) => {
      if (response.config.responseType === 'blob') {
        return {
          status: 'success',
          result: response.data,
        } as RequestResponseSuccess<Result> & Meta;
      }

      if (response.data.status === 'fail') {
        throw response.data.message;
      }

      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;
        if (data) {
          throw data;
        }
      }
      throw error;
    });
}
