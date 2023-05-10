import React from 'react';
import { Box, Button, Avatar, Container, Typography } from '@mui/material';
import { blue, orange, grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { ThumbUpAlt, RemoveRedEye, Comment } from '@mui/icons-material';

function DetailPage() {
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
            자유주제
          </Typography>
          <Typography
            variant='h5'
            component="h3"
            sx={{
              marginY: '20px',
            }}
          >
            간단한 인터뷰 모집해요!
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
            이현우
          </Typography>
        </Box>
        </Box>
        <Box
          display="flex"
          alignItems= "start"
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
            0
          </Button>
          <Box>
            <Box>
            What is Next.js?<br/>
            Next.js is a framework for building web applications.<br/><br/>

            With Next.js, you can build user interfaces using React components. <br/>
            Then, Next.js provides additional structure, features, and optimizations for your application.<br/><br/>

            Under the hood, Next.js also abstracts and automatically configures tooling for you, <br/>
            like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling.<br/><br/>

            Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications.<br/><br/>
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
                3
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
                  4
                </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default DetailPage;
