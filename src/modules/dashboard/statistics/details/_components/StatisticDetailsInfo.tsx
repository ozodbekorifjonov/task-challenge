import { Empty } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/hooks.ts';
import { selectStatisticDetails } from '../_store';
import StatisticInfoCard from '../../_components/StatisticInfoCard.tsx';
import { AntInput, Loading } from '../../../../../shared/ui-kit';
import { editSeriesTitle } from '../../_store';

const StatisticDetailsInfo = () => {
  const dispatch = useAppDispatch();

  const { isLoadingSeriesDetails, seriesDetails } = useAppSelector(
    selectStatisticDetails,
  );

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (seriesDetails?.seriess[0].title) {
      setTitle(seriesDetails.seriess[0].title);
    }
  }, [seriesDetails]);

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

  const handleChangeTitle = () => {
    const id = seriesDetails?.seriess[0].id;
    const currentTitle = seriesDetails?.seriess[0].title;
    if (title !== currentTitle) {
      dispatch(editSeriesTitle({ id, newTitle: title }));
    }
  };

  return (
    <Fragment>
      <div className='gap-4'>
        <AntInput
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleChangeTitle}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              e.currentTarget.blur();
            }
          }}
          className='text-2xl text-center font-semibold mb-4 text-gray-800 bg-transparent focus:outline-none border-b-2 border-gray-300 focus:border-blue-500 transition-colors duration-200'
          aria-label='Series Title'
        />
        <StatisticInfoCard
          showTitle={false}
          series={seriesDetails?.seriess[0]}
          longNote={true}
        />
      </div>
    </Fragment>
  );
};

export default StatisticDetailsInfo;
