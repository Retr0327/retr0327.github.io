import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import FontsStyle from '@components/Fonts';
import GaScript from '@components/GAScript';
import Shell from '@components/Shell';
import Spotlight from '@components/Spotlight';
import theme from '@config/theme';
import { MdxDataProvider } from '@contexts/mdx-data';
import { getPostsMetadata } from '@services/mdx';

export const metadata: Metadata = {
  title: 'Lixing Yang | Retr0',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const postsMetadata = await getPostsMetadata();
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <GaScript />
      <FontsStyle />
      <body>
        <MantineProvider theme={theme}>
          <MdxDataProvider mdxMetadata={postsMetadata}>
            <Spotlight />
            <Shell>{children}</Shell>
          </MdxDataProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
