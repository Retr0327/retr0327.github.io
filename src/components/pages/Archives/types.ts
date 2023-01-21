import { BlogGalleryProps } from 'types/blog';

export type ArchivesPageProps = Omit<BlogGalleryProps, 'allPosts'>;

export type FilterPosts = [string, { date: string; title: string; slug: string }[]][];
