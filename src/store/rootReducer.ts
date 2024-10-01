import { dashboardSlice } from '../modules/dashboard/_store';
import { dashboardStatisticsSlice } from '../modules/dashboard/statistics/_store';
import { dashboardStatisticsDetailsSlice } from '../modules/dashboard/statistics/details/_store';

export const reducer = {
  dashboardStore: dashboardSlice.reducer,
  dashboardStatisticsStore: dashboardStatisticsSlice.reducer,
  dashboardStatisticsDetailsStore: dashboardStatisticsDetailsSlice.reducer,
};
