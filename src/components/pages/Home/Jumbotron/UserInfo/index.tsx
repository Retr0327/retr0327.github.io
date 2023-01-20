import { memo } from 'react';
import layoutConfig from '@config/layout';
import { Avatar, Text, Box, Group } from '@mantine/core';
import { Github, LinkedIn, Email, CV } from './ActionIcon';

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
        <CV />
        <Email />
        <LinkedIn />
        <Github />
      </Group>
    </Box>
  );
}

export default memo(UserInfo);
