import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuthStatus } from '../redux/auth/auth.selector';
import { AuthStatusType } from '../redux/auth';

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const authStatus = useAppSelector(selectAuthStatus);

  return authStatus === AuthStatusType.Authenticated ? (
    <Navigate to="/" />
  ) : (
    children
  );
};

export default PublicRoute;
