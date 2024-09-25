import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthRoute from './AuthRoute.tsx';
import DashboardRoutes from './dashboard';

const Home = lazy(() => import('../app/home'));
const NotFound = lazy(() => import('../app/notFound'));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path={`/dashboard/*`}
          element={<AuthRoute component={<DashboardRoutes />} forAuth />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
