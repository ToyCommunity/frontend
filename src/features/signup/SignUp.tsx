import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useSignUp, useSignUpForm } from '@/hooks/signup';
import { SignUpForm } from '@/hooks/signup/useSignUpForm';
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

function SignUp() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }
  } = useSignUpForm();
  const { mutate } = useSignUp();

  const onSubmit = (data: SignUpForm) => {
    mutate(data);
    router.push('/signup/complete');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{ marginTop: '64px' }}
    >
      <Box
        display='flex'
        flexDirection="column"
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          sx={{
            margin: '8px',
            bgcolor: blue[500]
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography
          variant='h5'
          component="h1"
        >
          회원가입
        </Typography>
        <Box
          display="block"
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="nickname"
            label="닉네임"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.nickname}
            helperText={errors.nickname?.message}
            {...register('nickname')}
          />
          <TextField
            id="email"
            label="이메일"
            variant="outlined"
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            required
            {...register('email')}
          />
          <TextField
            id="password"
            type='password'
            label="비밀번호"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            required
            {...register('password')}
          />
          <TextField
            id="password-confirmation"
            type="password"
            label="비밀번호 재확인"
            variant="outlined"
            margin="normal"
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message}
            fullWidth
            required
            {...register('passwordConfirmation')}
          />
          <Button
            type='submit'
            variant='contained'
            fullWidth
            sx={{
              marginTop: '16px',
              marginBottom: '8px'
            }}
          >
            가입완료
          </Button>
        </Box>
        <Typography
          variant='body2'
          color={grey[500]}
          mt={8}
          mb={4}
        >
          Copyright © Shynity 2023.
        </Typography>
      </Box>
    </Container >
  );
}

export default SignUp;