import { createSlice } from '@reduxjs/toolkit';

import { IDashboardSliceState } from '../_types';

const initialState: IDashboardSliceState = {
  status: 'idle',
};

export const dashboardSlice = createSlice({
  name: 'dashboardStore',
  initialState,
  reducers: {},
  extraReducers: () => {},
});
