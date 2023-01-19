import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import NextApp, { AppContext } from 'next/app';
import MantineProvider from '@contexts/MantineProvider';
import NavigationLayout from '@components/layout/Navigation';

type Props = AppPropsWithLayout & { colorScheme: ColorScheme };

function App(props: Props) {
  const { Component, pageProps, colorScheme } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider colorScheme={colorScheme}>
      <NavigationLayout>{getLayout(<Component {...pageProps} />)}</NavigationLayout>
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
