import { memo } from 'react';
import { Group, Badge as MantineBadge } from '@mantine/core';

type Props = { data: string[] };

function Badge(props: Props) {
  const { data } = props;

  return (
    <Group spacing={8} mr={0}>
      {data.map((value, index) => (
        <MantineBadge
          key={`${value}-${index}`}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
        >
          {value}
        </MantineBadge>
      ))}
    </Group>
  );
}

export default memo(Badge);
