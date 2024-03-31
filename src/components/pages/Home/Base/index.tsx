import React from 'react';
import { Box, BoxProps, Container, ElementProps, Text } from '@mantine/core';
import SectionTitle from './SectionTitle';
import classes from './PageSection.module.css';

interface PageSectionProps extends BoxProps, ElementProps<'div'> {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PageSection(props: PageSectionProps) {
  const { title, description, children, ...rest } = props;
  return (
    <Box className={classes.wrapper} {...rest}>
      <Container size={1100}>
        <SectionTitle>{title}</SectionTitle>

        {description && (
          <Text className={classes.description} size="xl">
            {description}
          </Text>
        )}

        {children}
      </Container>
    </Box>
  );
}

export default PageSection;
