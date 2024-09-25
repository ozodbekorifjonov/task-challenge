import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { paths } from './paths';

type AuthRouteProps = {
  component: JSX.Element;
  forAuth: boolean;
  permission?: string | Array<string>;
};

const AuthRoute: React.FC<AuthRouteProps> = ({
  component,
  forAuth,
  permission,
}) => {
  const isAuthenticated = true;
  const canUserAccessModule = true;
  const location = useLocation();

  if (isAuthenticated !== forAuth) {
    return (
      <Navigate
        to={isAuthenticated ? '/' : paths.auth.loginByEimzo}
        state={{ from: location }}
      />
    );
  }

  if (isAuthenticated && permission && !canUserAccessModule) {
    return <div>PermissionsDenied</div>;
  }

  return component;
};

export default AuthRoute;
