import { createSlice } from '@reduxjs/toolkit';

import { IDashboardSliceState } from '../_types';

const initialState: IDashboardSliceState = {
  status: 'idle',
};

export const dashboardStatisticsSlice = createSlice({
  name: 'dashboardStatisticsStore',
  initialState,
  reducers: {},
  extraReducers: () => {},
});
