import React from 'react';
import Link from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import CardList from '../../components/lounge/CardList';

function Lounge() {
  return (
    <Container
      maxWidth="lg"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          padding: '48px 24px'
        }}
      >
        <Typography
          variant='h5'
          component="h1"
        >
          커뮤니티에서 자유롭게 이야기 나눠보세요!
        </Typography>
        <Link
          href="/post/create"
          passHref
          legacyBehavior
        >
          <Button
            variant="contained"
            sx={{
              padding: '4px 20px'
            }}
          >
            작성하기
          </Button>
        </Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
      >
        <CardList />
      </Box>
    </Container>
  );
}

export default Lounge;