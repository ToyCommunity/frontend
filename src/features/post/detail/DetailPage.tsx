import React from 'react';
import { Box, Button, Avatar, Container, Typography } from '@mui/material';
import { orange, grey } from '@mui/material/colors';
import { ThumbUpAlt, RemoveRedEye, Comment } from '@mui/icons-material';
import { GetDetailResponse, postApi } from '@/api';
import { GetServerSideProps } from 'next';

interface DetailProps {
  detail: GetDetailResponse;
}

const DetailPage = ({ detail }: DetailProps) => {
  return (
    <Container
      maxWidth="lg"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="left"
        sx={{
          padding: '48px 24px'
        }}
      >
        <Box
          sx={{
            marginBottom: '32px'
          }}
        >
          <Typography
            gutterBottom
            sx={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: orange[500]
            }}
          >
            {detail?.category}
          </Typography>
          <Typography
            variant='h5'
            component="h3"
            sx={{
              marginY: '20px',
            }}
          >
            {detail.title}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Avatar
              alt="Avatar"
              sx={{
                width: 36,
                height: 36,
                marginRight: "12px"
              }}
            />
            <Typography
              sx={{
                fontSize: '11px',
                color: grey[500],
                marginY: '12px'
              }}
            >
              {detail.nickname}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="start"
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: grey[200],
              padding: "8px 20px",
              marginRight: '24px',
              color: grey[500]
            }}
          >
            <ThumbUpAlt
              sx={{
                color: grey[400],
                marginRight: '4px'
              }}
            />
            {detail.likeCounts}
          </Button>
          <Box>
            <Box>
              {detail.content}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                marginTop: '24px'
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                sx={{
                  fontSize: '12px',
                  marginRight: "20px"
                }}
              >
                <RemoveRedEye
                  sx={{
                    color: grey[400],
                    fontSize: '18px',
                    marginRight: "8px"
                  }}
                />
                {detail.viewCounts}
              </Typography>
              <Typography
                display="flex"
                alignItems="center"
                sx={{
                  fontSize: '12px',
                  marginRight: "20px"
                }}
              >
                <Comment
                  sx={{
                    color: grey[400],
                    fontSize: '18px',
                    marginRight: "8px"
                  }}
                />
                {detail.replies.length}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<DetailProps> = async ({ query }) => {
  const postId = Number(query.id);

  try {
    const detail = await postApi.getDetailPost({ postId });
    return {
      props: {
        detail,
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
export default DetailPage;
