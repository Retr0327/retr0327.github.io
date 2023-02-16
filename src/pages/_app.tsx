import Script from 'next/script';
import Head from 'next/head';
import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import NextApp, { AppContext } from 'next/app';
import MantineProvider from '@contexts/Mantine';

type Props = AppPropsWithLayout & { colorScheme: ColorScheme };

function App(props: Props) {
  const { Component, pageProps, colorScheme } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Lixing Yang | Retr0327</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SF3HJM8QQL" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-SF3HJM8QQL');
        `}
      </Script>
      <MantineProvider colorScheme={colorScheme}>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'light',
  };
};

export default App;
