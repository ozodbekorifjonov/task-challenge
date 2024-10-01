import { Empty } from 'antd';
import { Fragment } from 'react';

import { useAppSelector } from '../../../../../store/hooks.ts';
import { selectStatisticDetails } from '../_store';
import StatisticInfoCard from '../../_components/StatisticInfoCard.tsx';
import { Loading } from '../../../../../shared/ui-kit';

const StatisticDetailsInfo = () => {
  const { isLoadingSeriesDetails, seriesDetails } = useAppSelector(
    selectStatisticDetails,
  );

  if (isLoadingSeriesDetails) {
    return (
      <div className='flex flex-row justify-center mt-10'>
        <Loading />
      </div>
    );
  }

  if (!seriesDetails || !seriesDetails?.seriess) {
    return (
      <div className='flex flex-row justify-center mt-10'>
        <Empty />
      </div>
    );
  }

  return (
    <Fragment>
      <div className='gap-4'>
        <StatisticInfoCard series={seriesDetails?.seriess[0]} />
      </div>
    </Fragment>
  );
};

export default StatisticDetailsInfo;
