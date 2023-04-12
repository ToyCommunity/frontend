import React from 'react';
import { atom, useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const textState = atom({
  key: 'textState',
  default: '',
});

export default function Home() {
  const [text, setText] = useRecoilState(textState);
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos')
      .then<Todo[]>(res => res.json()),
  });

  const todos = data?.slice(0, 10) || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <main>
      <Typography
        variant='h3'
        component="h1"
      >
        Todo List
      </Typography>
      <Stack
        spacing={1}
        direction="row"
      >
        <TextField
          variant='outlined'
          size='small'
          value={text}
          onChange={handleChange}
        />
        <Button variant="contained">추가</Button>
      </Stack>
      <List>
        {todos.map((todo: Todo) =>
        (<ListItem key={todo.id}>
          <Typography variant='body1'>
            {todo.title}
          </Typography>
        </ListItem>))}
      </List>
    </main>
  );
}
