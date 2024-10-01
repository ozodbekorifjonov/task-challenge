import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  IDashboardSliceState,
  ISearchSeriesRequest,
  ISearchSeriesResponse,
  ISeriesDetails,
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
    // Adding Series to Series list
    addSeriesToSeriesList: (
      state,
      action: PayloadAction<{ newSeries: ISeriesDetails }>,
    ) => {
      const { newSeries } = action.payload;
      if (newSeries) {
        const exists = state.seriesList.some(
          (series) => series.id === newSeries.id,
        );
        if (!exists) {
          state.seriesList.push(newSeries);
        } else {
          toast.warning('This series is already added to the list');
        }
      }
    },

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
      } else {
        state.searchedSeriesResponse = null;
      }
    },
  },
});

export const {
  addSeriesToSeriesList,
  searchSeriesByName,
  setSearchedSeriesListState,
} = dashboardStatisticsSlice.actions;
