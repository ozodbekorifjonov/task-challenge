import { DecodedToken } from '../../types/common.types.ts';

export function parseJwt(token: string): DecodedToken | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Invalid token', error);
    return null;
  }
}

export function isTokenValid(token: string | null): boolean {
  if (!token) {
    return false;
  }

  const decoded = parseJwt(token);
  if (!decoded) {
    return false;
  }

  const currentTime = Date.now() / 1000; // Convert to seconds
  return decoded.exp > currentTime; // Return true if token is not expired
}
