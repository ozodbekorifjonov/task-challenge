import { useState } from 'react';

import { AntdButton } from '../../../../shared/ui-kit';
import StatisticsDrawer from './StatisticsDrawer.tsx';

const StatisticsTools = () => {
  const [open, setOpen] = useState(false);

  const onToggleDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <div className='flex items-center justify-between xl:pb-8 xl:pt-4 pb-4 pt-3  gap-2'>
      <div className='flex items-center justify-end gap-2'>
        <AntdButton
          onClick={onToggleDrawer}
          className='flex items-center'
          type='primary'
        >
          Add chart
        </AntdButton>
      </div>
      <StatisticsDrawer onClose={onToggleDrawer} open={open} />
    </div>
  );
};

export default StatisticsTools;
