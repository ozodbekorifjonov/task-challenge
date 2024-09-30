import { createSelector } from 'reselect';

import { ReduxState } from '../../../../../store';

const selectStatisticsState = (state: ReduxState) =>
  state.dashboardStatisticsStore;

export const selectStatisticsList = createSelector(
  [selectStatisticsState],
  (statisticsStore) => {
    const seriesList = statisticsStore.seriesList;

    return {
      seriesList,
    };
  },
);
