import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { dashboardRoutes } from './routes';
import { renderRoutes } from '../renderRoutes';
import AuthRoute from '../AuthRoute.tsx';

const DashboardHome = lazy(() => import('../../app/dashboard/home'));

export default function DashboardRoutes(): React.JSX.Element {
  return (
    <div>
      <React.Suspense fallback={null}>
        <Routes>
          <Route
            index
            element={<AuthRoute component={<DashboardHome />} forAuth />}
          />
          {renderRoutes(dashboardRoutes)}
          <Route path='*' element={<Navigate to={'/dashboard'} />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}
