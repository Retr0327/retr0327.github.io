import Link from 'next/link';
import { Route } from '@config';
import { HEADER_LINKS_DATA } from '@config/links';
import cx from 'clsx';
import { Box, Burger, Anchor, Group, RemoveScroll } from '@mantine/core';
import classes from './Header.module.css';
import { SearchMobileControl, ColorSchemeControl } from '../../Controls/Header/Icons';
import HeaderControls from '../../Controls/Header';
import HeaderLinksGroup from './LinksGroup';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle: () => void;
  onSearch: () => void;
}

function Header(props: HeaderProps) {
  const { onSearch, navbarOpened, onNavbarToggle } = props;
  return (
    <>
      <header className={cx(classes.header, RemoveScroll.classNames.fullWidth)} data-desktop>
        <div className={classes.logoWrapper}>
          <Anchor component={Link} href={Route.Home} underline="never" className={classes.logo}>
            Retr0
          </Anchor>
        </div>
        <Group>
          <HeaderLinksGroup data={HEADER_LINKS_DATA} />
          <HeaderControls className={classes.controls} onSearch={onSearch} />
        </Group>
      </header>
      <header className={cx(classes.header, RemoveScroll.classNames.fullWidth)} data-mobile>
        <Group justify="space-between" w="100%" wrap="nowrap">
          <Box>
            <Burger
              opened={navbarOpened}
              onClick={onNavbarToggle}
              size="sm"
              aria-label="Toggle navbar"
            />
          </Box>

          <Anchor component={Link} href={Route.Home} underline="never" className={classes.logo}>
            Retr0
          </Anchor>

          <Group gap="sm">
            <SearchMobileControl onSearch={onSearch} />
            <ColorSchemeControl />
          </Group>
        </Group>
      </header>
    </>
  );
}

export default Header;
