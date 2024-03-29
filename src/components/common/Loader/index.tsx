import { rem, Loader as MantineLoader, Container } from '@mantine/core';

function Loader() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: rem(200) }}>
      <MantineLoader variant="dots" size="lg" />
    </Container>
  );
}

export default Loader;
