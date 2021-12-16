import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import { useGetLikesSummaryQuery } from '../redux/like/like.api';

export const useLikesSummary = (postId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetLikesSummaryQuery({ token: authToken, postId });
};
