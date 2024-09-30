import { useCallback, useEffect, useState } from 'react';
import { forOwn } from 'lodash';
import { useLocation } from 'react-router-dom';

import { paths } from '../routes/paths';

interface Paths {
  [key: string]: string | Paths;
}

const usePathMatchingKey = () => {
  const { pathname } = useLocation();
  const [matchedKey, setMatchedKey] = useState('');
  const [matchedCollapseKey, setMatchedCollapseKey] = useState<Array<string>>(
    [],
  );

  const onChangeOpenKey = useCallback((openKey: string[]) => {
    setMatchedCollapseKey(openKey);
  }, []);

  useEffect(() => {
    const iterateNestedObject = (obj: Paths, parentKey: string) => {
      forOwn(obj, (value) => {
        if (typeof value === 'string') {
          if (pathname.startsWith(value) || pathname === value) {
            setMatchedCollapseKey([parentKey]);
            setMatchedKey(value);
            return;
          }
        } else {
          iterateNestedObject(value, String(value.mainKey));
        }
      });
    };
    iterateNestedObject(paths, '');
  }, [matchedKey, pathname]);
  return { matchedKey, matchedCollapseKey, onChangeOpenKey };
};

export default usePathMatchingKey;
