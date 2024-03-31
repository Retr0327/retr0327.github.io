import { Avatar as MantineAvatar, rem, Text, Box, Group } from '@mantine/core';
import { Href } from '@config';
import { Github, LinkedIn, Email, CV } from './Icons';

function Avatar() {
  return (
    <Box>
      <MantineAvatar src={Href.Avatar} size={250} radius={120} mx="auto" />
      <Text ta="center" style={{ fontSize: rem(30) }} fw={500} mt="md">
        Lixing Yang
      </Text>
      <Text ta="center" c="dimmed" style={{ fontSize: rem(20) }}>
        Fullstack developer
      </Text>
      <Group gap={10} justify="center" mt="lg">
        <CV />
        <Email />
        <LinkedIn />
        <Github />
      </Group>
    </Box>
  );
}

export default Avatar;
