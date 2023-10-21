import { Title, Text, Container, Group } from '@mantine/core';
import classes from './Error.module.css';

type Props = {
  code: number;
  title: string;
  description: string;
  button: JSX.Element;
};

function ErrorPage(props: Props) {
  const { code, title, description, button } = props;

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{code}</div>
        <Title className={classes.title}>{title}</Title>
        <Text ta="center" className={classes.description}>
          {description}
        </Text>
        <Group justify="center">{button}</Group>
      </Container>
    </div>
  );
}

export default ErrorPage;
