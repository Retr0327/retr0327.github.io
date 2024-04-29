import type { MDXComponents } from 'mdx/types';
import {
  h,
  MdxLink,
  MdxParagraph,
  MdxUl,
  MdxLi,
  MdxBlockquote,
  MdxPre,
  MdxCode,
  MdxImage,
  MdxTable,
} from '@components/Mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    blockquote: MdxBlockquote,
    a: MdxLink,
    h1: h(1),
    h2: h(2),
    h3: h(3),
    h4: h(4),
    h5: h(5),
    h6: h(6),
    p: MdxParagraph,
    li: MdxLi,
    ul: MdxUl,
    pre: MdxPre,
    code: MdxCode,
    table: MdxTable,
    img: MdxImage,
    ...components,
  };
}
