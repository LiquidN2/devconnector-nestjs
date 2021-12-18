import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import { useGetCommentsByPostIdQuery } from '../redux/comment/comment.api';

export const useComments = (postId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetCommentsByPostIdQuery({ token: authToken, postId });
};
