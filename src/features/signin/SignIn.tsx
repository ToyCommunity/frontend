import React from 'react';
import Link from 'next/link';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, TextField, Typography, Link as MuiLink } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

function Login() {
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
        >
          <TextField
            id="id"
            label="아이디"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="password"
            label="비밀번호"
            variant="outlined"
            margin="normal"
            fullWidth
          />
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