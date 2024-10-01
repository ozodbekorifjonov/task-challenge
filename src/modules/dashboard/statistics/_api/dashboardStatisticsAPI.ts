import createResource from '../../../../utils/createResource';
import { BaseUrl } from '../../../../constants';
import { ISearchSeriesRequest, ISearchSeriesResponse } from '../_types';

const ordersResource = createResource('series', BaseUrl.Fred);

export const searchSeriessListAPI = async (
  params: ISearchSeriesRequest,
): Promise<ISearchSeriesResponse | never> => {
  return await ordersResource({
    method: 'GET',
    action: {
      path: 'search',
    },
    query: {
      search_text: params.search_text || '',
    },
  });
};
