import { useCallback, useRef } from 'react';

import { useSearchParams as glSearchParams } from 'react-router-dom';

type ISet<T = string> = (key: T, value: string | number | null) => void;
type ISetGroup<T = string[]> = (
  key: T,
  value: Array<string | string[] | number | number[] | null> | null,
) => void;
type IDebounceSet<T = string> = (
  key: T,
  value: string | number | null,
  debounce: number,
) => void;
type IGet<T = string | string[]> = (key: T) => Record<string, string | null>;

const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = glSearchParams();
  // @ts-ignore
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  const set: ISet = useCallback(
    (key, value) => {
      if (!value && typeof value !== 'number') {
        searchParams.delete(String(key));
      } else {
        searchParams.set(String(key), String(value));
      }
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const setGroup: ISetGroup = useCallback(
    (keys, values) => {
      if (values === null) {
        if (Array.isArray(keys)) {
          keys.forEach((key) => {
            searchParams.delete(String(key));
          });
          setSearchParams(searchParams);
        }
      } else if (
        Array.isArray(keys) &&
        Array.isArray(values) &&
        keys.length === values.length
      ) {
        keys.forEach((key, index) => {
          const value = values[index];
          if (!value && typeof value !== 'number') {
            searchParams.delete(String(key));
          } else {
            searchParams.set(String(key), String(value));
          }
        });
        setSearchParams(searchParams);
      } else {
        // eslint-disable-next-line no-console
        console.error('Keys and values must be arrays of the same length');
      }
    },
    [searchParams, setSearchParams],
  );

  const get: IGet = useCallback(
    (key) => {
      const _values: Record<string, string | null> = {};
      if (typeof key === 'string') {
        _values[key] = searchParams.get(key);
      } else if (Array.isArray(key)) {
        key.forEach((k) => {
          _values[k] = searchParams.get(k);
        });
      }
      return _values;
    },
    [searchParams],
  );

  const setWithDebounce: IDebounceSet = useCallback(
    (key, value, debounce) => {
      if (debounceTimers.current[key]) {
        clearTimeout(debounceTimers.current[key]);
      }

      debounceTimers.current[key] = setTimeout(() => {
        if (!value && typeof value !== 'number') {
          searchParams.delete(String(key));
        } else {
          searchParams.set(String(key), String(value));
        }
        setSearchParams(searchParams);
        delete debounceTimers.current[key];
      }, debounce);
    },
    [searchParams, setSearchParams],
  );

  return { setSearchParams, searchParams, set, get, setWithDebounce, setGroup };
};

export default useCustomSearchParams;
