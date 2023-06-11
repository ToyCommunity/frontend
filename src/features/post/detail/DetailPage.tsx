import React from 'react';
import { Box, Button, Avatar, Container, Typography, Menu, MenuItem, Fade, IconButton } from '@mui/material';
import { orange, grey } from '@mui/material/colors';
import { ThumbUpAlt, RemoveRedEye, Comment } from '@mui/icons-material';
import { GetDetailResponse, postApi } from '@/api';
import { GetServerSideProps } from 'next';
import ReplyList from '@/components/reply/ReplyList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';


interface DetailProps {
  detail: GetDetailResponse;
}

const DetailPage = ({ detail }: DetailProps) => {
  const router = useRouter();
  const id = Number(router.query?.id);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDetailMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickEdit = () => {
    router.push(`/post/edit/${id}`)
  };
  const onClickDelete = () => {
  };

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
        <Box>
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
                  justifyContent="space-between" 
                  sx={{
                    marginTop: '24px'
                  }}
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
                  <Box>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={openDetailMenu ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openDetailMenu ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={openDetailMenu}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={onClickEdit}>수정</MenuItem>
                      <MenuItem onClick={onClickDelete}>삭제</MenuItem>
                    </Menu>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              padding: '48px 24px',
              backgroundColor: '#f9fafb',
              borderTop: '0.0625rem solid #e7e7e7'
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                marginBottom: '16px'
              }}
            >
              댓글
            </Typography>
            <ReplyList />
          </Box>
        </Box>
      </Box>
    </Container >
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
