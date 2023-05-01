import React from 'react';
import Card from './Card';
import { Container, Grid, Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import axios from 'axios';
interface Post {
  title: string;
  id: number;
  body: string;
}
function CardList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const loadPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    );
    setPosts([...posts, ...response.data]);
    setPage(page + 1);
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
          hasMore={true}
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
