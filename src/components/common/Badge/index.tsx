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
          gradient={{ from: 'indigo', to: 'cyan' }}
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
