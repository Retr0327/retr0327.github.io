import { memo } from 'react';
import dynamic from 'next/dynamic';
import layoutConfig from '@config/layout';
import { Group, Tooltip } from '@mantine/core';

const Github = dynamic(() => import('./Icons').then((module) => module.Github));
const Facebook = dynamic(() => import('./Icons').then((module) => module.Facebook));
const ColorScheme = dynamic(() => import('./Icons').then((module) => module.ColorScheme));

function HeaderControls() {
  return (
    <Tooltip.Group openDelay={600} closeDelay={100}>
      <Group
        spacing="xs"
        pr="md"
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: {
            display: 'none',
          },
        })}
      >
        <Facebook link={layoutConfig.facebook.link} />
        <Github link={layoutConfig.github.lixing} tooltip="Github" />
        <ColorScheme />
      </Group>
    </Tooltip.Group>
  );
}

export default memo(HeaderControls);
