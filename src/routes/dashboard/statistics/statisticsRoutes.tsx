import { Routes } from 'react-router-dom';

import { statisticsRoutes } from './routes';
import { renderRoutes } from '../../renderRoutes.tsx';

const StatisticsRoutes = () => {
  return <Routes>{renderRoutes(statisticsRoutes)}</Routes>;
};

export default StatisticsRoutes;
