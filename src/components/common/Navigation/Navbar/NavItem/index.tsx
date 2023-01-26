import Link from 'next/link';
import { NavLink } from 'types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getRouteFromPathname } from '@utils';
import { Badge, UnstyledButton } from '@mantine/core';
import useStyles from './NavItems.styles';

type Props = { links: NavLink[] };

function NavItems(props: Props) {
  const { classes, cx } = useStyles();
  const { links } = props;
  const { pathname } = useRouter();
  const route = getRouteFromPathname(pathname);
  const [active, setActive] = useState(route);

  return (
    <>
      {links.map((link) => (
        <UnstyledButton
          key={link.label}
          className={cx(classes.link, {
            [classes.linkActive]: getRouteFromPathname(link.link!) === active,
          })}
          component={Link}
          href={link.link!}
          onClick={() => setActive(getRouteFromPathname(link.link!))}
        >
          <div className={classes.linkInner}>
            <link.icon size={20} className={classes.linkIcon} stroke={1.5} />
            <span>{link.label}</span>
          </div>
          {link.count && (
            <Badge size="sm" variant="filled" className={classes.badge}>
              {link.count}
            </Badge>
          )}
        </UnstyledButton>
      ))}
    </>
  );
}

export default NavItems;
