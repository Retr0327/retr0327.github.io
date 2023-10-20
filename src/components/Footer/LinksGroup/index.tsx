import Link from 'next/link';
import { Text } from '@mantine/core';
import { memo, useMemo } from 'react';
import links from './links';
import { LinksGroupProps } from './types';
import classes from './LinksGroup.module.css';

function LinksGroup(props: LinksGroupProps) {
  const { data, title } = props;
  const items = useMemo(
    () =>
      data.map((link, index) => {
        const TabProps =
          link.isExternal !== undefined
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : undefined;
        return (
          <Text
            className={classes.link}
            component={Link}
            href={link.link}
            key={index}
            {...TabProps}
          >
            {link.label}
          </Text>
        );
      }),
    [data]
  );

  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>{title}</Text>
      {items}
    </div>
  );
}

export default memo(LinksGroup);
export { links };
