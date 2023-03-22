import clsx from 'clsx';
import { type Metadata } from 'next';
import { Heebo } from 'next/font/google';

import Navbar from '@components/Navbar';

import './global.css';

const heebo = Heebo({ subsets: ['hebrew', 'latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Brandon Carlisle | Frontend Web Developer',
    template: '%s | Brandon Carlisle',
  },
  applicationName: 'Brandon Carlisle | Frontend Web Developer',
  authors: { name: 'Brandon Carlisle', url: 'https://www.carlisle.dev/' },
  publisher: 'Brandon Carlisle',
  description:
    'Frontend web developer interested in modern tools, and making cool stuff on the web.',
  colorScheme: 'dark',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: {
    shortcut: '/favicon.ico',
  },
  keywords: [
    'brandon',
    'carlisle',
    'frontend',
    'developer',
    'Next.js',
    'React',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={clsx(
          'relative min-h-screen min-w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-slate-900 via-blue-900 to-black p-4 text-white antialiased',
          heebo.className,
        )}
      >
        <Navbar />

        <main className="mx-auto max-w-screen-md pt-16 md:pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
