import createResource from '../../../../utils/createResource';
import { BaseUrl } from '../../../../constants';
import { ISearchSeriesRequest, ISearchSeriesResponse } from '../_types';

const ordersResource = createResource('orders', BaseUrl.Fred);

export const searchSeriessListAPI = async (
  params: ISearchSeriesRequest,
): Promise<ISearchSeriesResponse | never> => {
  return await ordersResource({
    method: 'GET',
    query: {
      search_text: params.search_text || '',
    },
  });
};
