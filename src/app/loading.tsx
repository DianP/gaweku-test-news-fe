import { AspectRatio, Button, Separator, Skeleton } from '@components';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function Loading() {
  return (
    <>
      <section className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Popular</h1>
          <Button
            variant="link"
            size="link"
            asChild
            className="text-blue-500 hover:text-blue-500/90 dark:text-blue-500 dark:hover:text-blue-500/90"
          >
            <Link href="/">
              See More <IconChevronRight size={20} />
            </Link>
          </Button>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-y-6 gap-x-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-6 gap-y-4">
            <div className="col-span-1">
              <AspectRatio ratio={3 / 2}>
                <Skeleton className="w-full h-full" />
              </AspectRatio>
            </div>
            <div className="flex flex-col gap-4 px-2 lg:px-0">
              <div className="flex gap-2">
                <Skeleton className="w-5 h-5" />
                <Skeleton className="w-32 h-5" />
              </div>
              <div>
                <Skeleton className="w-3/4 h-8" />
                <Skeleton className="w-3/4 h-8 mt-2" />
              </div>
              <div>
                <Skeleton className="w-36 h-5" />
              </div>
              <div className="mt-4">
                <Skeleton className="w-4/4 h-6" />
                <Skeleton className="w-3/4 h-6 mt-2" />
              </div>
            </div>
            <Separator orientation="horizontal" className="block lg:hidden" />
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-4 gap-y-6 gap-x-4">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <div className="flex flex-col gap-4 h-full" key={i}>
                <div className="col-span-1">
                  <AspectRatio ratio={3 / 2}>
                    <Skeleton className="w-full h-full" />
                  </AspectRatio>
                </div>
                <div className="flex flex-col h-full justify-between px-2 lg:px-0">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <Skeleton className="w-5 h-5" />
                      <Skeleton className="w-32 h-5" />
                    </div>
                    <div>
                      <Skeleton className="w-4/4 h-6" />
                      <Skeleton className="w-3/4 h-6 mt-2" />
                    </div>
                  </div>
                  <Skeleton className="w-2/4 h-5 mt-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Separator orientation="horizontal" />
      <section className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-12 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Whats New</h1>
          <Button
            variant="link"
            size="link"
            asChild
            className="text-blue-500 hover:text-blue-500/90 dark:text-blue-500 dark:hover:text-blue-500/90"
          >
            <Link href="/">
              See More <IconChevronRight size={20} />
            </Link>
          </Button>
        </div>
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-4 gap-y-6 gap-x-4">
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <div className="flex flex-col gap-4 h-full" key={i}>
                <div className="col-span-1">
                  <AspectRatio ratio={3 / 2}>
                    <Skeleton className="w-full h-full" />
                  </AspectRatio>
                </div>
                <div className="flex flex-col h-full justify-between px-2 lg:px-0">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      <Skeleton className="w-5 h-5" />
                      <Skeleton className="w-32 h-5" />
                    </div>
                    <div>
                      <Skeleton className="w-4/4 h-6" />
                      <Skeleton className="w-3/4 h-6 mt-2" />
                    </div>
                  </div>
                  <Skeleton className="w-2/4 h-5 mt-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
