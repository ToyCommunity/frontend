import React from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

function SignUp() {
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
          <TextField
            id="password-confirm"
            label="비밀번호 재확인"
            variant="outlined"
            margin="normal"
            fullWidth
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
    </Container>
  );
}

export default SignUp;