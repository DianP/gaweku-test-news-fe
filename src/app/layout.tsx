import '@styles/globals.scss';

import { Metadata } from 'next';

import { appConfig } from '@config/app';
import { fontSans } from '@lib/fonts';
import { cn } from '@lib/utils';
import { ThemeProvider } from '@components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: appConfig.name,
    template: `%s - ${appConfig.name}`,
  },
  description: appConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-white dark:bg-zinc-950 font-sans antialiased transition-colors text-zinc-950 dark:text-white',
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
