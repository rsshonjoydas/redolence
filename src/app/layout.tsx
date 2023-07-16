import Providers from '@/components/providers';
import env from '@/config/env';
import { siteConfig } from '@/config/site';
import { absoluteUrl, cn } from '@/lib/utils';
import '@/styles/index.scss';
import { Children } from '@/types';
import type { Metadata } from 'next';
import { Poppins as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '300',
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}`),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: 'Redolence',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: `@${env.TWITTER_URL}`,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: Children) {
  return (
    <html
      lang='en'
      className={cn('bg-white font-sans text-slate-900 antialiased', fontSans.variable)}
    >
      <head />
      <body className='antialiased text-gray-700 transition-colors duration-300 bg-light dark:bg-dark dark:text-gray-200'>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
