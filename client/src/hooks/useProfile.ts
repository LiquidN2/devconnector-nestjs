import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import {
  useGetMyProfileQuery,
  useGetProfileQuery,
} from '../redux/profile/profile.api';

export const useMyProfile = () => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetMyProfileQuery(authToken);
};

export const useProfile = (profileId: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetProfileQuery({ token: authToken, profileId });
};
