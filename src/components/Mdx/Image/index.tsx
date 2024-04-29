import qs from 'qs';
import { AspectRatio, Image, rem } from '@mantine/core';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type MdxImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

type ImageQuery = {
  pt?: string;
  pb?: string;
  aw?: string;
  apt?: string;
  apb?: string;
};

function createRem(value: string | undefined, defaultValue: number | undefined = undefined) {
  const defaultRem = defaultValue === undefined ? undefined : rem(defaultValue);
  return value === undefined ? defaultRem : rem(Number(value));
}

function MdxImage(props: MdxImageProps) {
  const { src, alt } = props;
  const [imageURL, imageQuery] = src!.split('?');
  const { aw, pt, pb, apt, apb } = qs.parse(imageQuery) as ImageQuery;

  return (
    <AspectRatio
      ratio={16 / 9}
      style={{
        maxWidth: createRem(aw, 550),
        paddingTop: createRem(apt),
        paddingBottom: createRem(apb),
      }}
    >
      <Image src={imageURL} alt={alt} pt={createRem(pt)} pb={createRem(pb)} />
    </AspectRatio>
  );
}

export default MdxImage;
