import { memo } from 'react';
import { Image as MantineImage, AspectRatio } from '@mantine/core';

function Image(props: any) {
  const width = new URLSearchParams(new URL(props.src).search).get('w');
  const maxWidth = width === null ? 550 : Number(width);

  return (
    <AspectRatio ratio={16 / 9} sx={{ maxWidth }}>
      <MantineImage {...props} />
    </AspectRatio>
  );
}

export default memo(Image);
