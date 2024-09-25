import { useDispatch, useSelector, useStore } from 'react-redux';

import { AppStore, ReduxDispatch, ReduxState } from './store.ts';

export const useAppDispatch = useDispatch.withTypes<ReduxDispatch>();
export const useAppSelector = useSelector.withTypes<ReduxState>();
export const useAppStore = useStore.withTypes<AppStore>();
