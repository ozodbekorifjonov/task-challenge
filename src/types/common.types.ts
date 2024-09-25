export interface IDefaultResponse<T> {
  data: T;
}

export interface DecodedToken {
  exp: number;
  jti: string;
  aud: string;
  iss: string;
}

export interface IErrorWithCode422 {
  message: 'string';
  errors: {
    [K: string]: Array<string>;
  };
}
