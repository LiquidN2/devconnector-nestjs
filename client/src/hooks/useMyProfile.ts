import { useAppSelector } from './useAppSelector';
import { selectAuthToken } from '../redux/auth/auth.selector';
import { useGetMyProfileQuery } from '../redux/profile/profile.api';

export const useMyProfile = () => {
  const authToken = useAppSelector(selectAuthToken);
  return useGetMyProfileQuery(authToken);
};
