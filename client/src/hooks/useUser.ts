import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';
import { useGetWhoAmIQuery } from '../redux/user';

export const useMe = () => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetWhoAmIQuery(authToken);
};
