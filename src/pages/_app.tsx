import { getCookie } from 'cookies-next';
import { AppPropsWithLayout } from 'types';
import { ColorScheme } from '@mantine/core';
import NextApp, { AppContext } from 'next/app';
import MantineProvider from '@contexts/MantineProvider';
import ColorSchemeToggle from '@components/common/ColorSchemeToggle';

type Props = AppPropsWithLayout & { colorScheme: ColorScheme };

function App(props: Props) {
  const { Component, pageProps, colorScheme } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider colorScheme={colorScheme}>
      <ColorSchemeToggle />
      {getLayout(<Component {...pageProps} />)}
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
