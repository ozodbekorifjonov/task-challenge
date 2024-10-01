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

export const selectSearchedStatisticsList = createSelector(
  [selectStatisticsState],
  (statisticsStore) => {
    const searchedSeriesResponse = statisticsStore.searchedSeriesResponse;
    const isLoadingSearchSeries = statisticsStore.isLoading.searchSeries;

    return {
      searchedSeriesResponse,
      isLoadingSearchSeries,
    };
  },
);
