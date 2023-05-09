import { ToastContainer } from 'react-toastify';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import StyleWrapper from '@/components/style-wrapper';
import { Analytics } from '@vercel/analytics/react';

import 'react-toastify/dist/ReactToastify.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Super Timesheet</title>
      <meta name="description" content="Super Timesheet" />
      <link rel="icon" href="/fav.png" />
    </Head>
    <StyleWrapper>
      <Component {...pageProps} />
      <ToastContainer />
    </StyleWrapper>
    <Analytics />
  </>
);

export default App;
