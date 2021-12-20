import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';
import { useGetCommentsByPostIdQuery } from '../redux/comment';

export const useComments = (postId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetCommentsByPostIdQuery({ token: authToken, postId });
};
