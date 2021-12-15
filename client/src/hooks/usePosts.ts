import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import { useGetPostsQuery } from '../redux/post/post.api';

export const usePosts = (target: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetPostsQuery({ token: authToken, target });
};
