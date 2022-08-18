export type LinkType = {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
};

export type LinksTypes = {
  links: LinkType[];
};

export type NavItemProps = {
  link: LinkType;
};
