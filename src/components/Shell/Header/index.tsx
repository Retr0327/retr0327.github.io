import Link from 'next/link';
import { Route } from '@config';
import { HEADER_LINKS_DATA } from '@config/links';
import { Box, Burger, Group, RemoveScroll, AppShell, Anchor } from '@mantine/core';
import cx from 'clsx';
import classes from './Header.module.css';
import HeaderLinksGroup from './LinksGroup';
import HeaderControls from './Controls';
import { SearchMobileControl, ColorSchemeControl } from './Controls/Icons';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle: () => void;
  onSearch: () => void;
}

function Header(props: HeaderProps) {
  const { onSearch, navbarOpened, onNavbarToggle } = props;

  return (
    <>
      <AppShell.Header
        className={cx(classes.header, RemoveScroll.classNames.fullWidth)}
        data-desktop
      >
        <div className={classes.logoWrapper}>
          <Anchor component={Link} href={Route.Home} underline="never" className={classes.logo}>
            Retr0
          </Anchor>
        </div>
        <Group>
          <HeaderLinksGroup data={HEADER_LINKS_DATA} />
          <HeaderControls className={classes.controls} onSearch={onSearch} />
        </Group>
      </AppShell.Header>

      <AppShell.Header
        className={cx(classes.header, RemoveScroll.classNames.fullWidth)}
        data-mobile
      >
        <Group justify="space-between" w="100%" wrap="nowrap">
          <Box miw={80}>
            <Burger opened={navbarOpened} onClick={onNavbarToggle} hiddenFrom="sm" size="sm" />
          </Box>

          <Anchor component={Link} href={Route.Home} underline="never" className={classes.logo}>
            Retr0
          </Anchor>

          <Group gap="sm">
            <SearchMobileControl onSearch={onSearch} />
            <ColorSchemeControl />
          </Group>
        </Group>
      </AppShell.Header>
    </>
  );
}

export default Header;
