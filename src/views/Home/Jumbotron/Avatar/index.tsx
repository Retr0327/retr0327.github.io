import { Box, Group, Avatar as MantineAvatar, rem, Text } from '@mantine/core';
import { Href } from '@config';
import { CV, Email, Github, LinkedIn } from './Icons';

function Avatar() {
  return (
    <Box>
      <MantineAvatar src={Href.Avatar} size={250} radius={120} mx="auto" />
      <Text ta="center" style={{ fontSize: rem(30) }} fw={500} mt="md">
        Retr0 Yang
      </Text>
      <Text ta="center" c="dimmed" style={{ fontSize: rem(20) }}>
        Senior Backend Engineer
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
