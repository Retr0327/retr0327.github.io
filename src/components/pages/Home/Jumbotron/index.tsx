'use client';

import { IconSchool } from '@tabler/icons-react';
import { Box, Container, Title, List, Text, Grid, Stack } from '@mantine/core';
import classes from './Jumbotron.module.css';
import Avatar from './Avatar';

function Jumbotron() {
  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        <Grid gutter={80}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Avatar />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Box style={{ maxWidth: 600, wordBreak: 'break-word' }}>
              <Stack gap={0}>
                <Title className={classes.title}>About Me</Title>
                <Text mt="md" size="lg">
                  Hi! This is Lixing. I am seeking internships in web development, specifically in
                  backend development, but am open to considering any related opportunities. I have
                  a passion for creating software and websites and am eager to learn more about
                  computer science. To learn more about my work and past projects, please check out
                  my GitHub profile and resume which can be accessed through the contact information
                  provided.
                </Text>

                <Title className={classes.subTitle} mt={40}>
                  Education
                </Title>
                <List spacing="xs" size="sm" center icon={<IconSchool size={25} />}>
                  <List.Item>
                    <Text size="lg">M.A. in Linguistics, 2022</Text>
                    <Text>National Taiwan University</Text>
                  </List.Item>
                </List>
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Jumbotron;
