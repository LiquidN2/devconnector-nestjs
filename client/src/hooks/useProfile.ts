import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth';
import {
  useGetProfileQuery,
  useGetProfileWithUserIdQuery,
  useGetProfileWithHandleQuery,
} from '../redux/profile';

export const useProfile = (profileId: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetProfileQuery({ token: authToken, profileId });
};

export const useProfileWithUserId = (userId: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetProfileWithUserIdQuery({ token: authToken, userId });
};

export const useProfileWithHandle = (handle: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetProfileWithHandleQuery({ token: authToken, handle });
};
