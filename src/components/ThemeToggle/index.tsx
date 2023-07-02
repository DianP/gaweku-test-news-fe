'use client';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components';
import { IconDeviceDesktop, IconMoonStars, IconSunHigh } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconMoonStars size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconSunHigh size={20} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[1337]">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <IconMoonStars size={20} className="mr-2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <IconSunHigh size={20} className="mr-2" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <IconDeviceDesktop size={20} className="mr-2" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
