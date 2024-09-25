export type AuthRoutePathname =
  | '/auth/register'
  | '/auth/login-by-phone/verify-sms'
  | '/auth/register/verify-sms'
  | '/auth/register/success'
  | '/logout'
  | '/app';

export type AuthRouteKeys =
  | 'LOGIN'
  | 'REGISTER'
  | 'INVITATION'
  | 'SMSVERIFICATION'
  | 'REGISTERSMSVERIFICATION'
  | 'REGISTER_SUCCESS'
  | 'LOGOUT'
  | 'APP';

export type AuthRoutes = 'login' | 'register' | 'invitation';
