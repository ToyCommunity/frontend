import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material'

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos')
      .then<Todo[]>(res => res.json()),
  });

  const todos = data?.slice(0, 10) || [];

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <main>
      <Typography variant='h3' component="h1">
        Todo List
      </Typography>
      <List>
        {todos.map((todo: Todo) =>
          <ListItem key={todo.id}>
            <Typography variant='body1'>
              {todo.title}
            </Typography>
          </ListItem>)}
      </List>
    </main>
  )
}
