import { StorageKeys } from '@/constants';
import { LoginPayload, UserProfile } from '@/models';
import { authApi } from 'api-client';
import useSWR from 'swr';

function getUserInfo(): UserProfile | null {
  try {
    return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || '') : null;
  } catch (error) {
    console.log('Failed to parse user info from local storage', error);
    return null;
  }
}

export function useAuth(options?: any) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>('./profile', {
    dedupingInterval: 60 * 60 * 1000, // 1hr
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess(data: UserProfile) {
      // save user info to local storage
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
    },
    onError(err: any) {
      // failed to get profile => logout
      console.log(err);
      logout();
    },
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);

    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate(null, false);
    localStorage.removeItem(StorageKeys.USER_INFO);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
