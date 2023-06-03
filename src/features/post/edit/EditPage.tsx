import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { ONLY_NUMBER_REGEX } from '@/utils';
import { postApi } from '@/api';
import { useRouter } from 'next/router';
import { Button, Container, Stack, TextField } from '@mui/material';
import MDEditor from '@/components/MDEditor';
import { useBeforeUnload } from '@/hooks/common';

function EditPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const id = Number(router.query?.id);

  const { data: detail } = useQuery(
    ['postDetail', id],
    ({ signal }) => postApi.getDetailPost({ postId: id, signal }),
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    }
  );

  useEffect(() => {
    setTitle(detail?.title || '');
    setContent(detail?.content || '');
  }, [detail]);

  useBeforeUnload({});

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (value?: string) => {
    setContent(value || '');
  };

  const updatePost = async () => {
    await postApi.updatePost({
      postId: id,
      title,
      content
    });
    router.push(`/post/${id}`);
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
          onClick={updatePost}
        >
          수정
        </Button>
      </Stack>
    </Container >
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const queryClient = new QueryClient();

  try {
    const id = Number(params?.id);

    if (!id || !ONLY_NUMBER_REGEX.test(String(id))) {
      return {
        notFound: true,
      };
    }

    await queryClient.fetchQuery(
      ['postDetail', id],
      ({ signal }) => postApi.getDetailPost({ postId: id, signal }),
    );

    return {
      props: { dehydratedState: dehydrate(queryClient) },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  } finally {
    queryClient.clear();
  }
};

const REVALIDATE_SECONDS = 30;

export default EditPage;