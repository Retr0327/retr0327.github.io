import { memo } from 'react';
import { BlogPostProps } from 'types/blog';
import { MDXRemote } from 'next-mdx-remote';
import MdxPageBase from './Base';
import MdxSiblings from './MdxSiblings';
import { components } from './Components';
import useStyles from './PostPage.styles';
import TableOfContents from './TableOfContents';

function PostPage(props: BlogPostProps) {
  const { post, siblings } = props;
  const { classes } = useStyles();
  const { source, headings } = post;

  return (
    <MdxPageBase>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <MDXRemote {...source} components={components} lazy />
          <MdxSiblings siblings={siblings} />
        </div>

        <div className={classes.tableOfContents}>
          <TableOfContents headings={headings} />
        </div>
      </div>
    </MdxPageBase>
  );
}

export default memo(PostPage);
