'use client';

import { Button } from '@components';
import { cn } from '@utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveLink = (urlPath: string): boolean => {
  const pathname = usePathname();
  const active = pathname === urlPath ? (true as boolean) : (false as boolean);

  return active as boolean;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Button
      variant="link"
      size="link"
      asChild
      className={cn({
        ['text-blue-500 dark:text-blue-500']: ActiveLink(href),
      })}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
