import React from 'react';
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function Login() {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <TextField id="outlined-basic" label="id" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" />
      <Link href="/">
        <Button variant="contained">로그인</Button>
      </Link>
      <Link href="signup">
        <Button variant="contained">회원가입</Button>
      </Link>
    </div>
  )
}

export default Login;