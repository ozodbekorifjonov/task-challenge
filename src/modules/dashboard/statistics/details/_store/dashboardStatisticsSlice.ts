import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ISeriesDetailsRequest,
  ISeriesDetailsResponse,
  ISeriesObservationsResponse,
  IStatisticsDetailsSliceState,
} from '../_types';

const initialState: IStatisticsDetailsSliceState = {
  seriesDetails: null,
  seriesObservations: null,
  isLoading: {
    seriesDetails: false,
    seriesObservations: false,
  },
  error: {
    seriesDetails: '',
    seriesObservations: '',
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

    // Fetching Series Observations by id
    fetchingSeriesObservationsById: (
      state,
      _action: PayloadAction<ISeriesDetailsRequest>,
    ) => {
      state.isLoading.seriesObservations = true;
    },
    setFetchedSeriesObservationsState: (
      state,
      action: PayloadAction<ISeriesObservationsResponse | null>,
    ) => {
      state.isLoading.seriesObservations = false;
      if (action.payload) {
        state.seriesObservations = action.payload;
      } else {
        state.seriesObservations = null;
      }
    },
  },
});

export const {
  fetchingSeriesById,
  setFetchedSeriesDetailsState,
  fetchingSeriesObservationsById,
  setFetchedSeriesObservationsState,
} = dashboardStatisticsDetailsSlice.actions;
