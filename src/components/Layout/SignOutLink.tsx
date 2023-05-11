import React from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { grey } from '@mui/material/colors';
import useSignOut from '@/hooks/signout';

function SignOutLink() {
  const { signOut } = useSignOut();

  return (
    <Link
      href="/"
      passHref
      legacyBehavior
    >
      <MuiLink
        color={grey[500]}
        underline='none'
        onClick={signOut}
      >
        로그아웃
      </MuiLink>
    </Link>
  );
}

export default SignOutLink;