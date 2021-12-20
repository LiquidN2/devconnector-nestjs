import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';

import { useGetConnectionsQuery } from '../redux/connection/connection.api';

export const useConnections = (userId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetConnectionsQuery({ token: authToken, userId });
};
