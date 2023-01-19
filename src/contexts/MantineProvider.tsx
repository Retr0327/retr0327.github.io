import { useState } from 'react';
import { setCookie } from 'cookies-next';
import { MantineProvider as Provider, ColorScheme, ColorSchemeProvider } from '@mantine/core';

type Props = { colorScheme: ColorScheme; children: React.ReactNode };

function MantineProvider(props: Props) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <Provider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
        {props.children}
      </Provider>
    </ColorSchemeProvider>
  );
}

export default MantineProvider;
