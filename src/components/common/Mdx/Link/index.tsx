import React from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';
import classes from './MdxLink.module.css';

function MdxLink(props: React.ComponentPropsWithoutRef<'a'>) {
  const { href, ...rest } = props;
  const replaced = href?.replace('https://retr0327.github.io', '')!;
  if (!replaced?.startsWith('http') && replaced.trim().length > 0) {
    return <Anchor className={classes.link} component={Link} href={replaced} {...rest} />;
  }

  return (
    <Anchor
      className={classes.link}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  );
}

export default MdxLink;
