import { ISeriesDetails } from '../../_types';

export interface ISeriesDetailsRequest {
  series_id: string;
}

export interface ISeriesDetailsResponse {
  realtime_start: string;
  realtime_end: string;
  seriess: Array<ISeriesDetails>;
}

export interface ISeriesObservations {
  realtime_start: string;
  realtime_end: string;
  date: string;
  value: string;
}

export interface ISeriesObservationsRequest {
  series_id: string;
}

export interface ISeriesObservationsResponse {
  realtime_start: string;
  realtime_end: string;
  observation_start: string;
  observation_end: string;
  units: string;
  output_type: number;
  file_type: string;
  order_by: string;
  sort_order: string;
  count: number;
  offset: number;
  limit: number;
  observations: Array<ISeriesObservations>;
}

export interface IStatisticsDetailsSliceState {
  seriesDetails: ISeriesDetailsResponse | null;
  isLoading: {
    seriesDetails: boolean;
  };
  error: {
    seriesDetails: string;
  };
}
