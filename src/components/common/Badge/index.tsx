import Link from 'next/link';
import { Route } from '@config/index';
import { Group, Badge as MantineBadge } from '@mantine/core';

interface BadgeProps {
  badges: string[];
}

function Badge(props: BadgeProps) {
  const badges = props.badges.map((badge, index) => (
    <MantineBadge
      key={`${badge}-${index}`}
      variant="gradient"
      component={Link}
      href={`${Route.Tags}/${encodeURI(badge)}?page=1`}
      gradient={{ from: 'indigo', to: 'cyan' }}
      style={{ cursor: 'pointer' }}
    >
      {badge}
    </MantineBadge>
  ));

  return (
    <Group gap={8} mr={0}>
      {badges}
    </Group>
  );
}

export default Badge;
