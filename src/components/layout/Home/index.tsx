import { memo, ReactNode } from 'react';
import { headerLinks } from '@config/routes';
import Menu from '@components/common/Navigation/Menu';
import Header from '@components/common/Navigation/Header';
import createMenuItems from '@components/common/Navigation/Menu/Items';
import useStyles from './Home.styles';

type Props = { children: ReactNode };

function HomeLayout(props: Props) {
  const { children } = props;
  const menuItems = createMenuItems();
  const { classes } = useStyles();

  return (
    <>
      <Header links={headerLinks}>
        <Menu menuItems={menuItems} />
      </Header>
      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
    </>
  );
}

export default memo(HomeLayout);
