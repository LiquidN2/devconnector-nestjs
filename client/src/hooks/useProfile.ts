import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import { useGetProfileQuery } from '../redux/profile/profile.api';

export const useProfile = (profileId: string | undefined) => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetProfileQuery({ token: authToken, profileId });
};
