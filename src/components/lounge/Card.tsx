import React from 'react'
import { RemoveRedEye, Comment, ThumbUp } from '@mui/icons-material';
import { Card as MuiCard, CardContent,  Typography, Box, Avatar } from '@mui/material';
import { yellow, orange, grey } from '@mui/material/colors';


function Card() {
  return (
    <div>
      <MuiCard
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: yellow[50],
          boxShadow: 'none',
        }}
      >
        <CardContent 
          sx={{
            padding: '18px'
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
            gutterBottom 
            sx={{ 
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: '140%'
            }}
          >
            사이드 프로젝트를 했는데, 피드백 주시면 감사하겠습니다!
          </Typography>
          <Typography
            gutterBottom 
            sx={{ 
              lineHeight: '140%',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              minHeight: '2.5rem',
              wordBreak: 'keep-all',
              fontSize: '14px',
              color: grey[500]
            }}
          >
            안녕하세요, 저는 6개월차 백엔드 개발자입니다.
            문제를 풀어보며 django를 학습할 수 있는 DJ-OJ라는 서비스를 만들어봤습니다.
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Avatar 
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg" 
              sx={{
                width: 36, 
                height: 36,
                marginRight: "8px"
              }}
            />
            <Typography
              sx={{ 
                fontSize: '11px',
                color: grey[500],
                marginY: '12px'
              }}
            >
              abc123<br/>
              3일 전
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
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
                    color: grey[300],
                    fontSize: '18px',
                    marginRight: "8px"
                  }} 
                  />
                30
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
                  color: grey[300],
                  fontSize: '18px',
                  marginRight: "8px"
                }} 
                />
              4
            </Typography>
            </Box>
            <Box>
              <Typography 
                display="flex"
                alignItems="center"
                sx={{
                  fontSize: '12px',
                }}
              >
                <ThumbUp 
                  sx={{
                    color: grey[300],
                    fontSize: '18px',
                    marginRight: "8px"
                  }} 
                />
                20
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </MuiCard>
    </div>
  )
}

export default Card
