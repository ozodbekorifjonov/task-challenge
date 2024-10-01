import { Empty } from 'antd';
import { Fragment } from 'react';

import StatisticInfoCard from './StatisticInfoCard.tsx';
import { useAppSelector } from '../../../../store/hooks.ts';
import { selectStatisticsList } from '../_store';

const StatisticList = () => {
  const { seriesList } = useAppSelector(selectStatisticsList);

  return (
    <Fragment>
      {!seriesList.length && (
        <div className='flex flex-row justify-center mt-10'>
          <Empty />
        </div>
      )}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4'>
        {seriesList.map((series, index) => (
          <StatisticInfoCard key={index} series={series} />
        ))}
      </div>
    </Fragment>
  );
};

export default StatisticList;
