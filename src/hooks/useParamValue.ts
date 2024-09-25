import { useSearchParams } from 'react-router-dom';

const useParamValue = (param: string): string | null => {
  const [searchParams] = useSearchParams();
  const value = searchParams.get(param);
  return value !== null ? value : null;
};

export default useParamValue;
