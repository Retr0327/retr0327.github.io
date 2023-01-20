import { IconSchool } from '@tabler/icons';
import { Grid, Col, Container, Box, Title, Text, Stack, List } from '@mantine/core';
import UserInfo from './UserInfo';
import useStyles from './Jumbotron.styles';

function Jumbotron() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1100} className={classes.inner}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <UserInfo />
          </Col>
          <Col span={12} md={7}>
            <Box sx={{ maxWidth: 600, wordBreak: 'break-word' }}>
              <Stack spacing={0}>
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
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Jumbotron;
