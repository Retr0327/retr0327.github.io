import { memo } from 'react';
import { BlogPostProps } from 'types/blog';
import { MDXRemote } from 'next-mdx-remote';
import MdxSiblings from './MdxSiblings';
import MdxHeader from './MdxHeader';
import { components } from './Components';
import useStyles from './PostPage.styles';
import TableOfContents from './TableOfContents';

type Props = Omit<BlogPostProps, 'posts'>;

function PostPage(props: Props) {
  const { post, siblings, frontMatter } = props;
  const { classes } = useStyles();
  const { source, headings } = post;

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <MdxHeader frontMatter={frontMatter} />
        <MDXRemote {...source} components={components} lazy />
        <MdxSiblings siblings={siblings} />
      </div>

      <div className={classes.tableOfContents}>
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}

export default memo(PostPage);
