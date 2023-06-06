import React, { useState } from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';

import '@/styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <title>Create Next App</title>
              <meta
                name="description"
                content="Generated by create next app"
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link
                rel="icon"
                href="/favicon.ico"
              />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </RecoilRoot >
  );
}
