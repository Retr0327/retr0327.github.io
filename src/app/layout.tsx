import '@mantine/code-highlight/styles.css';
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import theme from '@config/theme';
import type { Metadata, Viewport } from 'next';
import FontsStyle from '@components/Fonts';
import GaScript from '@components/GAScript';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Shell from '@components/Shell';
import SpotlightProvider from '@contexts/Spotlight';
import { getPostsMetadata } from '@services/mdx';
import { MdxMetadataProvider } from '@contexts/Mdx';

export const metadata: Metadata = {
  title: 'Lixing Yang | Retr0',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const postsMetadata = await getPostsMetadata();
  return (
    <html lang="en" translate="no">
      <head>
        <ColorSchemeScript />
      </head>
      <GaScript />
      <FontsStyle />
      <body>
        <MantineProvider theme={theme}>
          <MdxMetadataProvider metadata={postsMetadata}>
            <SpotlightProvider>
              <Shell>{children}</Shell>
            </SpotlightProvider>
          </MdxMetadataProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
