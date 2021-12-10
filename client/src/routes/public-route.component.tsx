import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';

import { useGetWhoAmIQuery } from '../redux/user/user.api';

import { SpinnerContainer } from './route.styles';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const authToken = useAppSelector(selectAuthToken);

  const { data, error, isLoading } = useGetWhoAmIQuery(authToken);

  if (isLoading)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  if (error) return children;

  return !isLoading && !error && data && data.email ? (
    <Navigate to="/" />
  ) : (
    children
  );
};

export default PublicRoute;
