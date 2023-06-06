import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

function ReplyList() {
  return (
    <div>
        <Box
          sx={{
            background: '#ffffff',
            border: '0.0625rem solid #e6eef5',
            borderRadius: '0.5rem',
            padding: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
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
              닉네임
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: '16px',
              marginTop: '16px'
            }}
          >
            댓글 내용
          </Box>
        </Box>
    </div>
  );
}

export default ReplyList;
