'use client';

import { Button } from '@components';
import { IconBrandGithub, IconHeartFilled } from '@tabler/icons-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="bg-white dark:bg-zinc-950 mt-48">
      <div className="container grid grid-cols-12">
        <div className="col-span-full flex flex-col lg:flex-row border-t border-zinc-200 dark:border-zinc-800 2xl:col-span-10 2xl:col-start-2 py-6 justify-between items-center gap-6">
          <div className="flex border-zinc-200 dark:border-zinc-800 items-center gap-2">
            <span className="text-sm inline-flex items-center gap-2">
              Designed & Built with <IconHeartFilled size={20} className="text-red-500" />
            </span>
            <Button variant="link" size="link" asChild className="justify-start h-auto">
              <Link href="https://www.diantama.dev" target="_blank" className="font-bold">
                By Dian Pratama
              </Link>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
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
        </div>
      </div>
    </div>
  );
};
