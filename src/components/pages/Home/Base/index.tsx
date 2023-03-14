import { useMemo } from 'react';
import { Container, Text, DefaultProps, Box } from '@mantine/core';
import SectionTitle from './Title';
import useStyles from './PageSection.styles';

interface Props extends DefaultProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PageSection(props: Props) {
  const { title, description, children, ...rest } = props;
  const { classes } = useStyles();

  const descr = useMemo(
    () =>
      description !== undefined ? (
        <Text className={classes.description} size="xl">
          {description}
        </Text>
      ) : null,
    [description, classes.description]
  );

  return (
    <Box className={classes.wrapper} {...rest}>
      <Container size={1100}>
        <SectionTitle>{title}</SectionTitle>
        {descr}
        {children}
      </Container>
    </Box>
  );
}

export default PageSection;
