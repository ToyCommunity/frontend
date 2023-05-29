import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Container, Stack, TextField } from '@mui/material';
import MDEditorSkeleton from './MDEditorSkeleton';
import { useBeforeUnload } from '@/hooks/common';
import { postApi } from '@/api/post';

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import { useRouter } from 'next/router';

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false, loading: () => <MDEditorSkeleton />
  }
);

function PostEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  useBeforeUnload({});

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (value?: string) => {
    setContent(value || '');
  };

  const createPost = async () => {
    await postApi.createPosts({ title, content });
    router.push('/');
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
      <Stack
        marginY={1}
        gap={1}
        direction="row"
        display='flex'
        justifyContent='flex-end'
      >
        <Button
          href="/"
          variant="outlined"
        >
          취소
        </Button>
        <Button
          variant="contained"
          onClick={createPost}
        >
          등록
        </Button>
      </Stack>
    </Container >
  );
}

export default PostEditor;