
import React from 'react';
import Link from 'next/link';
import { Link as MuiLink } from '@mui/material';
import { grey } from '@mui/material/colors';

function SignInLink() {
  return (
    <>
      <Link
        href="/signin"
        passHref
        legacyBehavior
      >
        <MuiLink
          color={grey[500]}
          underline="none"
          sx={{
            marginX: "8px"
          }}
        >
          로그인
        </MuiLink>
      </Link>
      <Link
        href="/signup"
        passHref
        legacyBehavior
      >
        <MuiLink
          color={grey[500]}
          underline="none"
          sx={{
            marginX: "8px"
          }}
        >
          회원가입
        </MuiLink>
      </Link>
    </>
  );
}

export default SignInLink;