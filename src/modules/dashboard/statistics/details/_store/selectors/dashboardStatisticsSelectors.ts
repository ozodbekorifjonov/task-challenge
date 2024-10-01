import { createSelector } from 'reselect';

import { ReduxState } from '../../../../../../store';

const selectStatisticsDetailsState = (state: ReduxState) =>
  state.dashboardStatisticsDetailsStore;

export const selectStatisticDetails = createSelector(
  [selectStatisticsDetailsState],
  (statisticsDetailsStore) => {
    const seriesDetails = statisticsDetailsStore.seriesDetails;
    const isLoadingSeriesDetails =
      statisticsDetailsStore.isLoading.seriesDetails;

    return {
      seriesDetails,
      isLoadingSeriesDetails,
    };
  },
);
