import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import useStyles from './Layout.styles';

type Props = { children: ReactNode };

function Layout(props: Props) {
  const { children } = props;
  const { classes } = useStyles();

  return (
    <>
      <Head>
        <title>Lixing Yang | Retr0327</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Header />
      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
