import { Fragment } from 'react';

import StatisticsTools from '../_components/StatisticsTools.tsx';
import StatisticList from '../_components/StatisticList.tsx';

const DashboardStatistics = () => {
  return (
    <Fragment>
      <StatisticsTools />
      <StatisticList />
    </Fragment>
  );
};

export default DashboardStatistics;
