import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const userStatus = 'authenticated';

  return userStatus === 'authenticated' ? <Navigate to="/" /> : children;
};

export default PublicRoute;
