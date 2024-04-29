'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LinkData } from 'types';
import { Anchor, Group } from '@mantine/core';
import classes from './HeaderLinksGroup.module.css';

interface HeaderLinksGroupProps {
  data: LinkData[];
}

function HeaderLinksGroup(props: HeaderLinksGroupProps) {
  const { data } = props;
  const pathname = usePathname();

  const links = data.map((link, index) => (
    <Anchor<'a'>
      className={classes.link}
      component={link.type === 'next' ? (Link as unknown as 'a') : 'a'}
      href={link.link}
      key={`${link.label}-${index}`}
      data-active={link.link === pathname || undefined}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Group gap={0} justify="flex-end" className="classes.links">
      {links}
    </Group>
  );
}

export default HeaderLinksGroup;
