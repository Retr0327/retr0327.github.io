import { Title, Text, Container, Group } from '@mantine/core';
import classes from './ErrorPage.module.css';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
  button: JSX.Element;
}

function ErrorPage(props: ErrorPageProps) {
  const { code, title, description, button } = props;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Container className={classes.inner}>
            <div className={classes.label}>{code}</div>
            <Title className={classes.title}>{title}</Title>
            <Text size="lg" ta="center" className={classes.description}>
              {description}
            </Text>
            <Group justify="center">{button}</Group>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
