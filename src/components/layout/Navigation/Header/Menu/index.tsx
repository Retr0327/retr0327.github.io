import Link from 'next/link';
import Route from '@config/routes';
import { LinkItem, PartialBy } from 'types';
import { useDisclosure } from '@mantine/hooks';
import { memo, useState, useMemo } from 'react';
import { Burger, Menu as MantineMenu } from '@mantine/core';
import { TablerIcon, IconHome, IconUser, IconArticle } from '@tabler/icons';
import useStyles from './Menu.styles';

type MenuLink = PartialBy<LinkItem, 'link'> & { icon: TablerIcon };

const links: MenuLink[] = [
  { label: 'Home', link: Route.home, icon: IconHome },
  { label: 'Blog', link: `${Route.blog}/1`, icon: IconArticle },
  { label: 'About', link: Route.about, icon: IconUser },
];

function Menu() {
  const { classes } = useStyles();
  const { toggle } = useDisclosure(false)[1];
  const [menuOpened, setMenuOpened] = useState(false);

  const items = useMemo(
    () =>
      links.map((link, index) => (
        <MantineMenu.Item
          key={`${link.label}-${index}`}
          component={Link}
          href={link.link!}
          icon={<link.icon size={14} stroke={1.5} />}
        >
          {link.label}
        </MantineMenu.Item>
      )),
    [links]
  );

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

      <MantineMenu.Dropdown>{items}</MantineMenu.Dropdown>
    </MantineMenu>
  );
}

export default memo(Menu);
