import { useCallback, useState } from 'react';

type UseLoadingReturnType = {
  isPending: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  toggleLoading: () => void;
};

export const usePending = (): UseLoadingReturnType => {
  const [isPending, setIsPending] = useState(false);

  const startLoading = useCallback(() => setIsPending(true), []);
  const stopLoading = useCallback(() => setIsPending(false), []);
  const toggleLoading = useCallback(() => setIsPending((prev) => !prev), []);

  return { isPending, startLoading, stopLoading, toggleLoading };
};
