import { useParams } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import { ISeriesDetailsRequest } from '../_types';
import { useAppDispatch } from '../../../../../store/hooks.ts';
import { fetchingSeriesById, fetchingSeriesObservationsById } from '../_store';
import StatisticDetailsChart from '../_components/StatisticDetailsChart.tsx';
import StatisticDetailsInfo from '../_components/StatisticDetailsInfo.tsx';
import StatisticDetailsTools from '../_components/StatisticDetailsTools.tsx';

const DashboardStatisticDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const request: ISeriesDetailsRequest = {
        series_id: id,
      };
      dispatch(fetchingSeriesById(request));
      dispatch(fetchingSeriesObservationsById(request));
    }
  }, [dispatch, id]);

  return (
    <Fragment>
      <StatisticDetailsTools />
      <StatisticDetailsChart />
      <StatisticDetailsInfo />
    </Fragment>
  );
};

export default DashboardStatisticDetails;
