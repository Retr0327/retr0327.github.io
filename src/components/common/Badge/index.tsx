import Link from 'next/link';
import Route from '@config/routes';
import { memo, useMemo } from 'react';
import { Group, Badge as MantineBadge } from '@mantine/core';

type Props = { data: string[] };

function Badge(props: Props) {
  const { data } = props;
  const badges = useMemo(
    () =>
      data.map((value, index) => (
        <MantineBadge
          key={`${value}-${index}`}
          variant="gradient"
          component={Link}
          href={`${Route.tags}/tag?id=${encodeURI(value)}${encodeURI('&')}page=1`}
          gradient={{ from: 'indigo', to: 'cyan' }}
          sx={{ cursor: 'pointer' }}
        >
          {value}
        </MantineBadge>
      )),
    [data]
  );

  return (
    <Group spacing={8} mr={0}>
      {badges}
    </Group>
  );
}

export default memo(Badge);
