import Link from 'next/link';
import { NavLink } from 'types';
import { Badge, UnstyledButton } from '@mantine/core';
import useStyles from './NavItems.styles';

type Props = { links: NavLink[] };

function NavItems(props: Props) {
  const { classes } = useStyles();
  const { links } = props;

  return (
    <>
      {links.map((link) => (
        <UnstyledButton
          key={link.label}
          className={classes.mainLink}
          component={Link}
          href={link.link!}
        >
          <div className={classes.mainLinkInner}>
            <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
            <span>{link.label}</span>
          </div>
          {link.count && (
            <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
              {link.count}
            </Badge>
          )}
        </UnstyledButton>
      ))}
    </>
  );
}

export default NavItems;
