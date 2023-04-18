import React from 'react';
import Link from 'next/link';
import { Button, Container, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

function Complete() {
  return (
    <Container sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={3}
        padding={3}
      >
        <CheckCircle
          color='success'
          sx={{ fontSize: '64px' }}
        />
        <Typography
          variant='h5'
          component="h1"
        >
          회원가입 완료
        </Typography>
        <Link
          href="/signin"
          passHref
        >
          <Button
            size='large'
            variant='contained'
            fullWidth
          >
            로그인하러 가기
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}

export default Complete;