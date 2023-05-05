import React, { useState } from 'react';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import { signIn } from 'next-auth/react';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, TextField, Typography, Link as MuiLink, Alert } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (errorMessage) {
      setErrorMessage("");
    }

    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      const url = (router.query.callbackUrl as string) ?? '/';
      router.push(url);
    }

    if (res?.status === 401) {
      setErrorMessage("이메일 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ marginTop: "64px" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            margin: "8px",
            bgcolor: blue[500]
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography
          variant="h5"
          component="h1"
        >
          로그인
        </Typography>
        <Box
          display="block"
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            id="email"
            label="이메일"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            id="password"
            type="password"
            label="비밀번호"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleChange}
          />
          {errorMessage &&
            <Alert
              severity="error"
              sx={{ marginTop: '16px' }}
            >
              {errorMessage}
            </Alert>}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              marginTop: "24px",
              marginBottom: "16px"
            }}
          >
            로그인
          </Button>
          <Link
            href="/signup"
            passHref
            legacyBehavior
          >
            <MuiLink
              display="flex"
              justifyContent="right"
            >
              {"Don't have an account? Sign Up"}
            </MuiLink>
          </Link>
        </Box>
        <Typography
          variant="body2"
          color={grey[500]}
          mt={8}
          mb={4}
        >
          Copyright © Shynity 2023.
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;