import { memo } from 'react';
import { Image as MantineImage, AspectRatio } from '@mantine/core';

function Image(props: any) {
  return (
    <AspectRatio ratio={16 / 9} sx={{ maxWidth: 550 }}>
      <MantineImage {...props} />
    </AspectRatio>
  );
}

export default memo(Image);
