import Head from 'next/head';
import Script from 'next/script';
import { PageControl } from 'types';
import { ReactElement } from 'react';

type Props = { children: ReactElement } & Pick<PageControl, 'Layout'>;

function _Layout(props: Props) {
  const { children, Layout: CustomLayout } = props;

  if (CustomLayout) {
    return <CustomLayout>{children}</CustomLayout>;
  }

  return children;
}

function Layout(props: Props) {
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
      <_Layout {...props} />
    </>
  );
}

export default Layout;
