'use client';

import { NavbarData } from 'types';
import Link from 'next/link';
import { UnstyledButton, Badge } from '@mantine/core';
import { usePathname } from 'next/navigation';
import classes from './NavbarLinksGroup.module.css';

interface NavbarLinksGroupProps {
  data: NavbarData[];
  onNavbarClose: () => void;
}

function NavbarLinksGroup(props: NavbarLinksGroupProps) {
  const { data, onNavbarClose } = props;
  const pathname = usePathname();

  return (
    <div>
      {data.map((link, index) => (
        <UnstyledButton
          key={`${index}-${link.label}`}
          className={classes.link}
          component={link.type === 'next' ? (Link as unknown as 'a') : 'a'}
          href={link.link}
          data-active={link.link === pathname || undefined}
          onClick={onNavbarClose}
        >
          <div className={classes.linkInner}>
            <link.icon size={20} className={classes.linkIcon} stroke={1.5} />
            <span>{link.label}</span>
          </div>
          {link.count && (
            <Badge size="sm" variant="filled" className={classes.linkBadge}>
              {link.count}
            </Badge>
          )}
        </UnstyledButton>
      ))}
    </div>
  );
}

export default NavbarLinksGroup;
