import { Button, Logo, NavLink, Separator, SidebarMenu, ThemeToggle, WeatherWidget } from '@components';
import { IconHome, IconMenu2, IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className="fixed top-0 z-[1337] w-full bg-white dark:bg-zinc-950">
      <div className="container grid grid-cols-12">
        <div className="col-span-full flex flex-col border-b border-zinc-200 dark:border-zinc-800 2xl:col-span-10 2xl:col-start-2">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-4">
              <Logo className="h-10 w-auto" />
              <div className="hidden lg:block">
                <SidebarMenu>
                  <Button variant="outline" size="default">
                    <IconMenu2 size={20} />
                    Menu
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </Button>
                </SidebarMenu>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <SidebarMenu>
                  <Button variant="outline" size="default">
                    <IconMenu2 size={20} />
                    Menu
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </Button>
                </SidebarMenu>
              </div>
              <div className="hidden md:block">
                <WeatherWidget />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-zinc-200 py-4 dark:border-zinc-800">
            <div className="flex h-full items-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="/">
                  <IconHome size={20} />
                </Link>
              </Button>
            </div>
            <Separator orientation="vertical" />
            <div className="flex w-full items-center gap-8">
              <NavLink href="/">Home</NavLink>
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="hidden">
                <IconSearch size={20} />
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
