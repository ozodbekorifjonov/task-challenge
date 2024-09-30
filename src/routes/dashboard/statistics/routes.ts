import { lazy } from 'react';

import { IRoutes } from '../../renderRoutes.tsx';

export const statisticsRoutes: Array<IRoutes> = [
  {
    path: '/statistics/*',
    component: lazy(() => import('../../../app/dashboard/statistics/statistics.tsx')),
  },
];
