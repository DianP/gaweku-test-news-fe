import '@styles/globals.css';
import { Footer, Navbar, ThemeProvider } from '@components';
import { appConfig } from '@config';
import { fontSans, fontSerif } from '@styles';
import { Metadata } from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: `${appConfig.name} - News Aggregator`,
    template: `%s - ${appConfig.name}`,
  },
  description: appConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-zinc-950 antialiased transition-colors dark:bg-zinc-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
          <Navbar />
          <div className="container grid grid-cols-12 pt-[158px]">
            <div className="col-span-full mt-16 flex flex-col gap-16 2xl:col-span-10 2xl:col-start-2">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
