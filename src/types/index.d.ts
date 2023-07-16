import { UrlObject } from 'url';

export type Url = string | UrlObject;

export interface Children {
  children: React.ReactNode;
}

export type ClassName = {
  className?: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};
