'use server';

import { Button, Logo, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, WeatherWidget } from '@components';
import { IconBrandGithub, IconHeartFilled } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

interface SidebarProps {
  children?: React.ReactNode;
}

export async function SidebarMenu({ children }: SidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <SheetTitle>
            <Logo className="h-10" />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-full w-full gap-6 py-6">
          <div className="flex flex-col w-full border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <WeatherWidget />
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800 p-6 absolute bottom-0 w-full left-0 bg-white dark:bg-zinc-950">
            <div className="flex flex-col w-full pb-6">
              <Button variant="outline" asChild className="mb-4">
                <Link href="https://github.com/dianp/gaweku-test-news-fe" target="_blank">
                  <IconBrandGithub size={20} /> Source Code
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/dianp/gaweku-test-news-api" target="_blank">
                  <IconBrandGithub size={20} /> API Source Code
                </Link>
              </Button>
            </div>
            <div className="flex flex-col border-t pt-6 border-zinc-200 dark:border-zinc-800">
              <span className="text-sm inline-flex items-center gap-2">
                Designed & Built with <IconHeartFilled size={20} className="text-red-500" />
              </span>
              <Button variant="link" size="link" asChild className="justify-start h-auto">
                <Link href="https://www.diantama.dev" target="_blank" className="font-bold">
                  By Dian Pratama
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
