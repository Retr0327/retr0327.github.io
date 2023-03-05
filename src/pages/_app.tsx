import dynamic from 'next/dynamic';
import { getCookie } from 'cookies-next';
import { AppPropsWithControl } from 'types';
import { ColorScheme } from '@mantine/core';
import NextApp, { AppContext } from 'next/app';
import MantineProvider from '@contexts/Mantine';

const Layout = dynamic(() => import('@components/layout'));

type Props = AppPropsWithControl & { colorScheme: ColorScheme };

function App(props: Props) {
  const { Component, pageProps, colorScheme } = props;

  return (
    <MantineProvider colorScheme={colorScheme}>
      <Layout {...Component.control}>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
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
