
import React from 'react';
import Link from 'next/link';
import { Container, Box, Link as MuiLink } from '@mui/material';
import { grey } from '@mui/material/colors';
import { signOut, useSession } from 'next-auth/react';

function Nav() {
  const { data } = useSession();
  const isloggedIn = !!data?.user;

  return (
    <Container
      maxWidth="lg"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
        }}
      >
        <Box
          gridColumn="span 10"
          display="flex"
          alignItems="center"
          sx={{
            height: "50px"
          }}
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
          sx={{
            height: "50px"
          }}
        >
          {isloggedIn ? (
            <Link
              href="/"
              passHref
              legacyBehavior
            >
              <MuiLink
                color={grey[500]}
                underline='none'
                onClick={() => signOut()}
              >
                로그아웃
              </MuiLink>
            </Link>
          ) : (
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
          )}
        </Box>
      </Box>
    </Container>
  );
}
export default Nav;
