import Giscus from '@giscus/react';
import { Box, useMantineColorScheme } from '@mantine/core';

function Comments() {
  const { colorScheme } = useMantineColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <Box mt={30}>
      <Giscus
        repo="Retr0327/retr0327.github.io"
        repoId="MDEwOlJlcG9zaXRvcnkzNzgzMTk4ODc="
        category="Comments"
        categoryId="DIC_kwDOFoy0D84CVCEC"
        mapping="url"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        lang="en"
        theme={theme}
      />
    </Box>
  );
}

export default Comments;
