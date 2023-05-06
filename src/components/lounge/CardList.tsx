import React from 'react';
import Card from './Card';
import { Container, Grid, Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import { Post, postApi } from '@/api';

function CardList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = async () => {
    const data = await postApi.getPosts();
    setPosts([...posts, ...data.postResults]);
    setPage(page + 1);
    setHasMore(data.totalPages > page);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Container
        maxWidth="lg"
      >
        <InfiniteScroll
          dataLength={posts.length}
          next={loadPosts}
          hasMore={hasMore}
          loader={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                padding: '48px 24px'
              }}
            >
              <Typography
                variant='h5'
                component="h1"
              >
                Loading...
              </Typography>
            </Box>
          }
        >
          <Grid
            container
            spacing={4}
          >
            {posts.map((post, index) => (
              <Grid
                item
                key={index}
                sm={12}
                md={6}
                lg={4}
              >
                <Card post={post} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export default CardList;
