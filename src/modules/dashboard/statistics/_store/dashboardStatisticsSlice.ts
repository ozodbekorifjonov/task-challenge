import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IDashboardSliceState,
  ISearchSeriesRequest,
  ISearchSeriesResponse,
} from '../_types';

const initialState: IDashboardSliceState = {
  seriesList: [],
  searchedSeriesResponse: null,
  isLoading: {
    searchSeries: false,
  },
  error: {
    searchSeries: '',
  },
};

export const dashboardStatisticsSlice = createSlice({
  name: 'dashboardStatisticsStore',
  initialState,
  reducers: {
    // Searching Seriess by title
    searchSeriesByName: (
      state,
      _action: PayloadAction<ISearchSeriesRequest>,
    ) => {
      state.isLoading.searchSeries = true;
    },
    setSearchedSeriesListState: (
      state,
      action: PayloadAction<ISearchSeriesResponse | null>,
    ) => {
      state.isLoading.searchSeries = false;
      if (action.payload) {
        state.searchedSeriesResponse = action.payload;
      }
    },
  },
});

export const { searchSeriesByName, setSearchedSeriesListState } =
  dashboardStatisticsSlice.actions;
