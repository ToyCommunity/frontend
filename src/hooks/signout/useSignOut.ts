import { authApi } from '@/api';
import { signOut as nextAuthSignOut } from 'next-auth/react';

function useSignOut() {
  const signOut = () => {
    authApi
      .signOut()
      .then(() => {
        nextAuthSignOut();
    });
  };

  return { signOut };
}

export default useSignOut;