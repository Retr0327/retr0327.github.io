'use client';

import { createContext, useContext, useMemo } from 'react';
import { PostMetadataType } from 'types/mdx';
import { create } from 'zustand';

type MdxDataProps = {
  children: React.ReactNode;
  mdxMetadata: PostMetadataType[];
};

export type MdxData = {
  categories: string[];
  metadata: PostMetadataType[];
};

export interface MdxDataState {
  mdx: MdxData;
  pick: (
    metadata: PostMetadataType[],
    pageParam: number,
    perPage: number
  ) => {
    selectedMetadata: PostMetadataType[];
    totalPages: number;
  } | null;
  getSiblingsBySlug: (
    metadata: PostMetadataType[],
    slug: string
  ) => {
    prev: PostMetadataType | undefined;
    next: PostMetadataType | undefined;
  };
}

const MdxDataContext = createContext<MdxDataState | null>(null);

function MdxDataProvider(props: MdxDataProps) {
  const { children, mdxMetadata } = props;
  const useStore = useMemo(
    () =>
      create<MdxDataState>(() => ({
        mdx: {
          categories: mdxMetadata.reduce((acc: string[], curr) => {
            curr.category.forEach((category) => {
              acc.push(category);
            });
            return acc;
          }, []),
          metadata: mdxMetadata,
        },
        pick: (metadata: PostMetadataType[], pageParam: number, perPage: number) => {
          const pageIndex = pageParam - 1;
          const startIndex = pageIndex * perPage;
          const endIndex = (pageIndex + 1) * perPage;
          const totalPages = Math.ceil(metadata.length / perPage);
          const selectedMetadata = metadata.slice(startIndex, endIndex);
          if (selectedMetadata.length === 0) {
            return null;
          }
          return { selectedMetadata, totalPages };
        },
        getSiblingsBySlug: (metadata: PostMetadataType[], slug: string) => {
          const index = metadata.findIndex((page) => page.slug === slug);
          const prev = metadata[index - 1];
          const next = metadata[index + 1];
          return { prev, next };
        },
      })),
    []
  );

  const store = useStore();
  return <MdxDataContext.Provider value={store}>{children}</MdxDataContext.Provider>;
}

const useMdxData = () => {
  const ctx = useContext(MdxDataContext);
  if (!ctx) {throw Error('Invalid context');}
  return ctx;
};

export { useMdxData, MdxDataProvider };
