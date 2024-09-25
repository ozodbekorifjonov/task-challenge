import request, { RequestParams } from '../request';
import { BaseUrl } from '../../constants';

export type ResourcePathParams = {
  [param: string]: string | number;
};

export type ResourceRequestParams<T> = Omit<
  RequestParams,
  'endpoint' | 'baseUrl'
> & {
  action?:
    | string
    | {
        path: string;
        params?: ResourcePathParams;
      };
  baseUrl?: BaseUrl;
} & (T extends ResourcePathParams
    ? { controllerParams: T }
    : { controllerParams?: void });

export const replaceParams = (str: string, params: ResourcePathParams) =>
  str.replace(
    /:([a-zA-Z_]+)/g,
    (match, keyword) => `${params[keyword]}` || match,
  );

const resource =
  <T = void>(controller: string, defaultBaseUrl: BaseUrl = BaseUrl.Default) =>
  <R, M = NonNullable<unknown>>({
    action,
    controllerParams,
    baseUrl,
    ...rest
  }: ResourceRequestParams<T>) => {
    const path: string[] = [];

    if (controllerParams) {
      path.push(replaceParams(controller, controllerParams));
    } else {
      path.push(controller);
    }

    if (action) {
      if (typeof action === 'object') {
        path.push(replaceParams(action.path, action.params || {}));
      } else {
        path.push(action);
      }
    }

    return request<R, M>({
      endpoint: path.join('/').replace(/\/\//g, '/'),
      baseUrl: baseUrl || defaultBaseUrl,
      ...rest,
    });
  };

export default resource;
