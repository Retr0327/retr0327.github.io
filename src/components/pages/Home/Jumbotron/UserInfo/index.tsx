import { memo } from 'react';
import { IconMail } from '@tabler/icons';
import layoutConfig from '@config/layout';
import IconController from '@components/common/Icons';
import { Avatar, Text, Box, Group, ActionIcon } from '@mantine/core';

function UserInfo() {
  return (
    <Box>
      <Avatar src={layoutConfig.avatar} size={250} radius={120} mx="auto" />
      <Text align="center" size={30} weight={500} mt="md">
        Lixing Yang
      </Text>
      <Text align="center" color="dimmed" size={20}>
        Fullstack developer
      </Text>

      <Group spacing={10} position="center" mt="lg">
        <ActionIcon
          variant="default"
          radius="md"
          size={36}
          sx={(theme) => ({
            color: theme.white,
            backgroundImage: 'linear-gradient(90deg, #fd7e14 0%, #fa5252 100%)',
          })}
          component="a"
          href="mailto:lixingyang.dev@gmail.com"
        >
          <IconMail size={20} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          radius="md"
          size={36}
          sx={(theme) => ({
            color: theme.white,
            backgroundColor: layoutConfig.linkedin.color,
            borderColor: layoutConfig.linkedin.color,
            ...theme.fn.hover({
              backgroundColor: theme.fn.lighten(layoutConfig.linkedin.color, 0.1),
            }),
          })}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={layoutConfig.linkedin.link}
        >
          <IconController size={18} control="linkedin" />
        </ActionIcon>
        <ActionIcon
          variant="default"
          radius="md"
          size={36}
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={layoutConfig.github.lixing}
        >
          <IconController size={18} control="github" />
        </ActionIcon>
      </Group>
    </Box>
  );
}

export default memo(UserInfo);
