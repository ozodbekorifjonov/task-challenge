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
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  const set: ISet = useCallback(
    (key, value) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (!value && typeof value !== 'number') {
        newSearchParams.delete(String(key));
      } else {
        newSearchParams.set(String(key), String(value));
      }
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams],
  );

  const setGroup: ISetGroup = useCallback(
    (keys, values) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      if (values === null) {
        if (Array.isArray(keys)) {
          keys.forEach((key) => {
            newSearchParams.delete(String(key));
          });
          setSearchParams(newSearchParams);
        }
      } else if (
        Array.isArray(keys) &&
        Array.isArray(values) &&
        keys.length === values.length
      ) {
        keys.forEach((key, index) => {
          const value = values[index];
          if (!value && typeof value !== 'number') {
            newSearchParams.delete(String(key));
          } else {
            newSearchParams.set(String(key), String(value));
          }
        });
        setSearchParams(newSearchParams);
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
        const newSearchParams = new URLSearchParams(searchParams.toString());

        if (!value && typeof value !== 'number') {
          newSearchParams.delete(String(key));
        } else {
          newSearchParams.set(String(key), String(value));
        }
        setSearchParams(newSearchParams);
        delete debounceTimers.current[key];
      }, debounce);
    },
    [searchParams, setSearchParams],
  );

  const clearAll = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return {
    setSearchParams,
    searchParams,
    set,
    get,
    setWithDebounce,
    setGroup,
    clearAll,
  };
};

export default useCustomSearchParams;
