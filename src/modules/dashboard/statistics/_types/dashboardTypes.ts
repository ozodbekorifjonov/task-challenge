export interface ISeriesDetails {
  id: string;
  realtime_start: string;
  realtime_end: string;
  title: string;
  observation_start: string;
  observation_end: string;
  frequency: string;
  frequency_short: string;
  units: string;
  units_short: string;
  seasonal_adjustment: string;
  seasonal_adjustment_short: string;
  last_updated: string;
  popularity: number;
  notes: string;
}

export interface IStatisticInfo {
  realtime_start: string;
  realtime_end: string;
  seriess: Array<ISeriesDetails>;
}

export interface IDashboardSliceState {
  seriesList: Array<IStatisticInfo>;
  searchedSeriesResponse: ISearchSeriesResponse | null;
  isLoading: {
    searchSeries: boolean;
  };
  error: {
    searchSeries: string;
  };
}

export interface ISearchSeriesRequest {
  search_text: string;
}

export interface ISearchSeriesResponse {
  realtime_start: string;
  realtime_end: string;
  order_by: string;
  sort_order: string;
  count: number;
  offset: number;
  limit: number;
  seriess: Array<ISeriesDetails>;
}
