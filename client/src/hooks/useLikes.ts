import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';
import { useGetLikesSummaryQuery } from '../redux/like';

export const useLikesSummary = (postId: string) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetLikesSummaryQuery({ token: authToken, postId });
};
