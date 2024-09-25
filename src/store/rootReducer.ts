import { accountSlice } from '../modules/account/_store';
import { dashboardSlice } from '../modules/dashboard/_store';

export const reducer = {
  accountStore: accountSlice.reducer,
  dashboardStore: dashboardSlice.reducer,
};
