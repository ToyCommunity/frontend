import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { ONLY_NUMBER_REGEX } from '@/utils';
import { postApi } from '@/api';
import { useRouter } from 'next/router';

function EditPage() {
  const router = useRouter();
  const id = Number(router.query?.id);

  const { data } = useQuery(
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

  return (
    <div>EditPage</div>
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