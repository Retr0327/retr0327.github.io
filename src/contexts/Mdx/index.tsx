'use client';

import { createContext, useContext } from 'react';
import { PostMetadataType } from 'types/mdx';

interface MdxMetadataProviderProps {
  children: React.ReactNode;
  metadata: PostMetadataType[];
}

const MdxMetadataContext = createContext([] as PostMetadataType[]);
const useMdxMetadata = () => useContext(MdxMetadataContext);

function MdxMetadataProvider(props: MdxMetadataProviderProps) {
  const { children, metadata } = props;
  return <MdxMetadataContext.Provider value={metadata}>{children}</MdxMetadataContext.Provider>;
}

export { useMdxMetadata, MdxMetadataProvider };
