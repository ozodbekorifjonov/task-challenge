import createResource from '../../../../../utils/createResource';
import { BaseUrl } from '../../../../../constants';
import {
  ISeriesDetailsRequest,
  ISeriesDetailsResponse,
  ISeriesObservationsResponse,
} from '../_types';

const ordersResource = createResource('series', BaseUrl.Fred);

export const seriesDetailsAPI = async (
  params: ISeriesDetailsRequest,
): Promise<ISeriesDetailsResponse | never> => {
  return await ordersResource({
    method: 'GET',
    query: {
      series_id: params.series_id || '',
    },
  });
};

export const seriesObservationsByIdAPI = async (
  params: ISeriesDetailsRequest,
): Promise<ISeriesObservationsResponse | never> => {
  return await ordersResource({
    method: 'GET',
    action: {
      path: 'observations',
    },
    query: {
      series_id: params.series_id || '',
    },
  });
};
