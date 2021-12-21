import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';

import { useGetConnectionsQuery } from '../redux/connection';

export const useConnections = (userId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetConnectionsQuery({ token: authToken, userId });
};
