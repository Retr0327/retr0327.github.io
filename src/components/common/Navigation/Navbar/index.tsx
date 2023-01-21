import { memo } from 'react';
import { useSpotlight } from '@mantine/spotlight';
import { Navbar as MantineNavbar } from '@mantine/core';
import SearchControl from './Control';
import useStyles from './Navbar.styles';

function Navbar() {
  const { classes } = useStyles();
  const spotlight = useSpotlight();

  return (
    <MantineNavbar className={classes.navbar}>
      <MantineNavbar.Section className={classes.mainSection} grow>
        <SearchControl onClick={spotlight.openSpotlight} sx={{ width: '100%' }} />
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

export default memo(Navbar);
