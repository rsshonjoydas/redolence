import { SiteConfig } from '@/types';
import env from './env';

export const siteConfig: SiteConfig = {
  name: `${env.NAME}`,
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: `${env.URL}`,
  ogImage: 'https://redolence.com/og.jpg',
  links: {
    twitter: `https://twitter.com/${env.TWITTER_URL}`,
    github: `https://github.com/rsshonjoydas${env.GITHUB_URL}`,
  },
};
