import { createSelector } from 'reselect';

import { ReduxState } from '../../../../store';

const selectAccountState = (state: ReduxState) => state.accountStore;

export const isAuthLoading = createSelector(
  [selectAccountState],
  (accountStore) => accountStore.isLoading,
);
