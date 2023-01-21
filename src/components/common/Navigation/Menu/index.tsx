import { useDisclosure } from '@mantine/hooks';
import { memo, useState } from 'react';
import { Burger, Menu as MantineMenu } from '@mantine/core';
import useStyles from './Menu.styles';

type Props = { menuItems: JSX.Element[] };

function Menu(props: Props) {
  const { menuItems } = props;
  const { classes } = useStyles();
  const { toggle } = useDisclosure(false)[1];
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <MantineMenu
      shadow="md"
      position="bottom"
      width="100%"
      offset={15}
      onOpen={() => setMenuOpened(true)}
      onClose={() => setMenuOpened(false)}
      classNames={classes}
    >
      <MantineMenu.Target>
        <Burger opened={menuOpened} onClick={toggle} className={classes.burger} size="sm" />
      </MantineMenu.Target>
      <MantineMenu.Dropdown>{menuItems}</MantineMenu.Dropdown>
    </MantineMenu>
  );
}

export default memo(Menu);
