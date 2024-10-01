import { useEffect, useState } from 'react';

import { AntdButton } from '../../../../shared/ui-kit';
import StatisticsDrawer from './StatisticsDrawer.tsx';
import { RequestConfigAPI } from '../../../../constants';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams.tsx';
import { ISearchSeriesRequest } from '../_types';
import { useAppDispatch } from '../../../../store/hooks.ts';
import { searchSeriesByName } from '../_store';

const StatisticsTools = () => {
  const dispatch = useAppDispatch();
  const { get, setWithDebounce, clearAll } = useCustomSearchParams();

  const searchParams = get([
    RequestConfigAPI.drawerOpen as string,
    RequestConfigAPI.search as string,
  ]);

  const drawerParam = searchParams[RequestConfigAPI.drawerOpen];
  const searchParam = searchParams[RequestConfigAPI.search];

  const [open, setOpen] = useState<boolean>(Boolean(drawerParam));

  useEffect(() => {
    if (searchParam) {
      const request: ISearchSeriesRequest = {
        search_text: searchParam,
      };
      dispatch(searchSeriesByName(request));
    }
  }, [searchParams, dispatch, get, searchParam]);

  const onOpenDrawer = () => {
    setWithDebounce(
      RequestConfigAPI.drawerOpen,
      1,
      RequestConfigAPI.paramDelayTime1,
    );
    setOpen(true);
  };

  const onCloseDrawer = () => {
    clearAll();
    setOpen(false);
  };

  return (
    <div className='flex items-center justify-between xl:pb-8 xl:pt-4 pb-4 pt-3  gap-2'>
      <div className='flex items-center justify-end gap-2'>
        <AntdButton
          onClick={onOpenDrawer}
          className='flex items-center'
          type='primary'
        >
          Add chart
        </AntdButton>
      </div>
      <StatisticsDrawer onClose={onCloseDrawer} open={open} />
    </div>
  );
};

export default StatisticsTools;
