import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';

import { useGetWhoAmIQuery } from '../redux/user/user.api';

import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

import { SpinnerContainer } from './route.styles';

interface PublicRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PublicRouteProps): JSX.Element => {
  const authToken = useAppSelector(selectAuthToken);

  const { data, error, isLoading } = useGetWhoAmIQuery(authToken);

  if (isLoading)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  if (error) return <Navigate to="/auth" />;

  return !isLoading && !error && (!data || !data.email) ? (
    <Navigate to="/auth" />
  ) : (
    children
  );
};

export default PrivateRoute;
