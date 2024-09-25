import { lazy } from 'react';

import { paths } from '../paths';
import { IRoutes } from '../renderRoutes.tsx';
import { methodsRemoveMainPath } from '../../utils/routes.ts';

const { removePath } = methodsRemoveMainPath('/dashboard');

export const dashboardRoutes: Array<IRoutes> = [
  {
    path: `${removePath(paths.dashboard.delivery)}/*`,
    component: lazy(() => import('../../app/dashboard/home')),
    permissions: ['readDocuments'],
    forAuth: true,
  },
];
