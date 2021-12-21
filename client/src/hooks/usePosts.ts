import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';
import { useGetPostsQuery } from '../redux/post';

export const usePosts = (target: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetPostsQuery({ token: authToken, target });
};
