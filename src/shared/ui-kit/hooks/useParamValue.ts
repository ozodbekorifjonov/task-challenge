import { useSearchParams } from 'react-router-dom';

const useParamValue = (param: string) => {
  const [searchParams] = useSearchParams();

  return searchParams.get(param);
};

export default useParamValue;
