import { memo } from 'react';
import { rem, Image as MantineImage, AspectRatio } from '@mantine/core';

function Image(props: any) {
  const params = new URLSearchParams(new URL(props.src).search);
  const width = params.get('w');
  const pt = params.get('pt');
  const pb = params.get('pb');
  const maxWidth = width === null ? rem(550) : rem(Number(width));
  const paddingTop = pt === null ? undefined : rem(Number(pt));
  const paddingBottom = pb === null ? undefined : rem(Number(pb));

  return (
    <AspectRatio ratio={16 / 9} sx={{ maxWidth, paddingTop, paddingBottom }}>
      <MantineImage {...props} />
    </AspectRatio>
  );
}

export default memo(Image);
