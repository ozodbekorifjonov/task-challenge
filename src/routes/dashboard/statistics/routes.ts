import { lazy } from 'react';

import { IRoutes } from '../../renderRoutes.tsx';

export const statisticsRoutes: Array<IRoutes> = [
  {
    path: '/',
    component: lazy(
      () => import('../../../app/dashboard/statistics/statistics.tsx'),
    ),
  },
  {
    path: '/:id/*',
    component: lazy(
      () =>
        import(
          '../../../app/dashboard/statistics/statisticDetails/statisticDetails.tsx'
        ),
    ),
  },
];
