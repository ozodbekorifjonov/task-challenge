import { lazy } from 'react';
import { IRoutes } from '../../renderRoutes.tsx';

export const goodsRoutes: Array<IRoutes> = [
  {
    path: '/list/*',
    component: lazy(() => import('../../../app/dashboard/home')),
  },
];
