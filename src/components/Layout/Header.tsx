
import React from 'react';
import Link from 'next/link';
import { Container, Box, Link as MuiLink } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSession } from 'next-auth/react';
import SignOutLink from './SignOutLink';
import SignInLink from './SignInLink';

function Nav() {
  const { status } = useSession();
  const loading = status === 'loading';
  const loggedIn = status === 'authenticated';

  return (
    <Container
      maxWidth="lg"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "50px" }}
      >
        <Box
          gridColumn="span 10"
          display="flex"
          alignItems="center"
        >
          <Link
            href="/"
            passHref
            legacyBehavior
          >
            <MuiLink
              color={grey[900]}
              underline="none"
              sx={{
                fontWeight: "bold",
                marginX: "8px"
              }}
            >
              라운지
            </MuiLink>
          </Link>
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          {loading
            ? null
            : loggedIn
              ? <SignOutLink />
              : <SignInLink />
          }
        </Box>
      </Box>
    </Container>
  );
}
export default Nav;
