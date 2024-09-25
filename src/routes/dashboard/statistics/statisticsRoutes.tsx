import { Navigate, Route, Routes } from 'react-router-dom';

import { statisticsRoutes } from './routes';
import { renderRoutes } from '../../renderRoutes.tsx';

const StatisticsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard/statistics' />} />
      {renderRoutes(statisticsRoutes)}
    </Routes>
  );
};

export default StatisticsRoutes;
