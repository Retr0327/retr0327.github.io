import { memo } from 'react';
import { Image as MantineImage, AspectRatio } from '@mantine/core';

function Image(props: any) {
  const params = new URLSearchParams(new URL(props.src).search);
  const width = params.get('w');
  const pt = params.get('pt');
  const pb = params.get('pb');
  const maxWidth = width === null ? 550 : Number(width);
  const paddingTop = pt === null ? undefined : Number(pt);
  const paddingBottom = pb === null ? undefined : Number(pb);

  return (
    <AspectRatio ratio={16 / 9} sx={{ maxWidth, paddingTop, paddingBottom }}>
      <MantineImage {...props} />
    </AspectRatio>
  );
}

export default memo(Image);
