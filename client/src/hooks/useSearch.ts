import { useAppSelector } from './useAppSelector';
import { selectQueryValue } from '../redux/query';
import { selectAuthToken } from '../redux/auth';
import { useSearchQuery } from '../redux/search';

export const useSearch = () => {
  const authToken = useAppSelector(selectAuthToken);
  const query = useAppSelector(selectQueryValue);
  return useSearchQuery({ token: authToken, query });
};
