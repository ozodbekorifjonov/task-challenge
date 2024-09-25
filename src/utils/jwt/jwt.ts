import storage from '../storage';
import { ACCESS_TOKEN } from '../../constants';

export const setJwt = (jwt: string): void => storage.set(ACCESS_TOKEN, jwt);

export const getJwt = (): string | null => storage.get(ACCESS_TOKEN);

export const removeJwt = (): void => storage.remove(ACCESS_TOKEN);
