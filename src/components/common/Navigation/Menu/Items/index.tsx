import Link from 'next/link';
import { useMemo } from 'react';
import { Menu } from '@mantine/core';
import { menuLinks } from '@config/routes';

function createMenuItems(): JSX.Element[] {
  return useMemo(
    () =>
      menuLinks.map((link, index) => (
        <Menu.Item
          key={`${link.label}-${index}`}
          component={Link}
          href={link.link!}
          icon={<link.icon size={14} stroke={1.5} />}
        >
          {link.label}
        </Menu.Item>
      )),
    [menuLinks]
  );
}

export default createMenuItems;
