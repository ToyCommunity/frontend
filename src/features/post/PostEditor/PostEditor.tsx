import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, TextField, Container, Stack } from '@mui/material';
import MDEditorSkeleton from './MDEditorSkeleton';

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false, loading: () => <MDEditorSkeleton />
  }
);

function PostEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (value?: string) => {
    setContent(value || '');
  };

  return (
    <Container
      maxWidth="md"
      sx={{ marginTop: '16px' }}
    >
      <TextField
        placeholder='제목을 입력해주세요.'
        margin="normal"
        value={title}
        onChange={handleChangeTitle}
        fullWidth
      />
      <MDEditor
        height={500}
        minHeight={500}
        toolbarHeight={56}
        value={content}
        textareaProps={{ placeholder: '내용을 입력해주세요.' }}
        onChange={handleChangeContent}
      />
      <Stack mt={1}>
        <Button variant='contained'>작성</Button>
      </Stack>
    </Container >
  );
}

export default PostEditor;