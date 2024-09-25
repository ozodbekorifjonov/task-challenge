import { Route } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import React from 'react';

export interface IRoutes {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  sub?: Array<IRoutes>;
  forAuth?: boolean;
  permissions?: string | Array<string>;
}

export const renderRoutes = (routes: Array<IRoutes>) => {
  return routes.map(
    ({ path, component: Component, sub, forAuth, permissions }) => {
      const Element = forAuth ? (
        <AuthRoute
          forAuth={Boolean(forAuth)}
          permission={permissions}
          key={path}
          component={<Component />}
        />
      ) : (
        <Component />
      );

      return (
        <Route path={path} element={Element} key={path}>
          {sub?.length ? renderRoutes(sub) : null}
        </Route>
      );
    },
  );
};
