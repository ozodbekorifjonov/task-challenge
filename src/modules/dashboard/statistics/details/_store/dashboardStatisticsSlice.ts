import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ISeriesDetailsRequest,
  ISeriesDetailsResponse,
  IStatisticsDetailsSliceState,
} from '../_types';

const initialState: IStatisticsDetailsSliceState = {
  seriesDetails: null,
  isLoading: {
    seriesDetails: false,
  },
  error: {
    seriesDetails: '',
  },
};

export const dashboardStatisticsDetailsSlice = createSlice({
  name: 'dashboardStatisticsDetailsStore',
  initialState,
  reducers: {
    // Fetching Series details by id
    fetchingSeriesById: (
      state,
      _action: PayloadAction<ISeriesDetailsRequest>,
    ) => {
      state.isLoading.seriesDetails = true;
    },
    setFetchedSeriesDetailsState: (
      state,
      action: PayloadAction<ISeriesDetailsResponse | null>,
    ) => {
      state.isLoading.seriesDetails = false;
      if (action.payload) {
        state.seriesDetails = action.payload;
      } else {
        state.seriesDetails = null;
      }
    },
  },
});

export const { fetchingSeriesById, setFetchedSeriesDetailsState } =
  dashboardStatisticsDetailsSlice.actions;
