import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/animations.css";
import "../styles/featuresTransitions.css";
import { UTMProvider } from "../contexts/UTMContext/UTMContext";
import TrackUTMHandler from "../components/UTMTrack/UTMTrack";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <UTMProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link key="icon" rel="icon" href="/favicon.ico" />
        </Head>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
        <TrackUTMHandler />
      </QueryClientProvider>
    </UTMProvider>
  );
}

export default MyApp;
