import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { SerializeOptions } from 'next-mdx-remote/dist/types';

const serializeConfig = (data: { [key: string]: any }): SerializeOptions => ({
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    format: 'mdx',
  },
  scope: data,
});

export default serializeConfig;
