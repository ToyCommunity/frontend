import React from 'react';
import { RemoveRedEye, Comment, ThumbUp } from '@mui/icons-material';
import { Card as MuiCard, CardContent, Typography, Box, Avatar } from '@mui/material';
import { yellow, orange, grey } from '@mui/material/colors';
import { Post } from '@/api';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);

interface CardProps {
  post: Post;
}

const Card: React.FC<CardProps> = ({ post }) => {
  const { category, title, nickname, postContent, createdAt, viewCounts, likeCounts, postId } = post;
  const fromNow = dayjs(createdAt).locale('ko').fromNow();
  const router = useRouter();
  return (
    <div>
      <MuiCard
        onClick={()=>router.push(`/detail/${postId}`)}
        sx={{
          height: '252px',
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
            {category}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              lineHeight: '140%',
              display: 'block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              height: '84px',
              display: '-webkit-box',
              overflow: 'hidden',
              wordBreak: "keep-all",
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 4,
              fontSize: '14px',
              color: grey[500],
            }}
          >
            {postContent}
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
              {nickname}
              <br />
              {fromNow}
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
                {viewCounts}
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
                {likeCounts}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </MuiCard>
    </div>
  );
};

export default Card;
