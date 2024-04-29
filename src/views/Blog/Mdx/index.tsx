'use client';

import dynamic from 'next/dynamic';
import { PostMetadataType } from 'types/mdx';
import classes from './MdxPage.module.css';
import MdxTableOfContents from './TableOfContents';
import MdxPageHeader from './Header';

const PostComments = dynamic(() => import('./Comments'), { ssr: false });
const MdxSiblings = dynamic(() => import('./Siblings'), { ssr: false });

interface MdxPageProps {
  children: React.ReactNode;
  metadata: PostMetadataType;
}

function MdxPage(props: MdxPageProps) {
  const { metadata, children } = props;
  return (
    <>
      <div className={classes.main}>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <MdxPageHeader metadata={metadata} />
            {children}
            <PostComments />
            <MdxSiblings slug={metadata.slug} />
          </div>
          <div className={classes.tableOfContents}>
            <MdxTableOfContents />
          </div>
        </div>
      </div>
    </>
  );
}

export default MdxPage;
