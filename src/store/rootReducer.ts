import { dashboardSlice } from '../modules/dashboard/_store';
import { dashboardStatisticsSlice } from '../modules/dashboard/statistics/_store';

export const reducer = {
  dashboardStore: dashboardSlice.reducer,
  dashboardStatisticsStore: dashboardStatisticsSlice.reducer,
};
