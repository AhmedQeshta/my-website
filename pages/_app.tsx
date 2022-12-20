import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import { NavBar } from '../components/';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { config } from '../utils';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config)); 

  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
