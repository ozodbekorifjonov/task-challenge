import { useState } from 'react';

import { AntdButton } from '../../../../shared/ui-kit';
import StatisticsDrawer from './StatisticsDrawer.tsx';
import { RequestConfigAPI } from '../../../../constants';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams.tsx';

const StatisticsTools = () => {
  const { get, setWithDebounce, clearAll } = useCustomSearchParams();

  const searchParams = get([RequestConfigAPI.drawerOpen as string]);

  const [open, setOpen] = useState<boolean>(
    Boolean(searchParams[RequestConfigAPI.drawerOpen]),
  );

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
