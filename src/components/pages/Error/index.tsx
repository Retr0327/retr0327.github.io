import { memo } from 'react';
import { Title, Text, Container, Group } from '@mantine/core';
import useStyles from './ErrorPage.styles';

type Props = {
  code: number;
  title: string;
  description: string;
  button: JSX.Element;
};

function ErrorPage(props: Props) {
  const { classes } = useStyles();
  const { code, title, description, button } = props;

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{code}</div>
        <Title className={classes.title}>{title}</Title>
        <Text size="lg" align="center" className={classes.description}>
          {description}
        </Text>
        <Group position="center">{button}</Group>
      </Container>
    </div>
  );
}

export default memo(ErrorPage);
