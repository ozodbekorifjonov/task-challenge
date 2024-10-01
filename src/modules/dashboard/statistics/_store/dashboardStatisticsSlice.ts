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
      action: PayloadAction<{ newSeriess: Array<ISeriesDetails> }>,
    ) => {
      const { newSeriess } = action.payload;

      newSeriess.forEach((newSeries) => {
        const exists = state.seriesList.some(
          (series) => series.id === newSeries.id,
        );
        if (!exists) {
          state.seriesList.push(newSeries);
        } else {
          toast.warning(`This ${newSeries.title} series already exists`);
        }
      });
    },

    // Editing a Series title
    editSeriesTitle: (
      state,
      action: PayloadAction<{ id: string; newTitle: string }>,
    ) => {
      const { id, newTitle } = action.payload;
      const series = state.seriesList.find((series) => series.id === id);
      if (series) {
        series.title = newTitle;
      } else {
        toast.warning(`Series with id ${id} does not exist.`);
      }
    },

    // Deleting a Series by id
    deleteSeriesById: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const index = state.seriesList.findIndex((series) => series.id === id);
      if (index !== -1) {
        state.seriesList.splice(index, 1);
      } else {
        toast.warning(`Series with id ${id} does not exist.`);
      }
    },

    // Searching Series by title
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
  editSeriesTitle,
  deleteSeriesById,
} = dashboardStatisticsSlice.actions;
