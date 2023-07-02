import { Button, NewsCard, NewsCardBig, Separator } from '@components';
import { getNews } from '@lib';
import { IconChevronRight } from '@tabler/icons-react';
import type { NewsData, NewsResponse } from '@types';
import Link from 'next/link';
import React, { Suspense } from 'react';

export default async function Page() {
  const popularNews: NewsResponse = await getNews({ provider: 'all', page: '1', filter: 'popular' });
  const popularNewsData = popularNews.data;

  const allNews: NewsResponse = await getNews({ provider: 'all', page: '1', filter: 'all' });
  const allNewsData = allNews.data;

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
          {popularNewsData &&
            popularNewsData.slice(0, 1).map((news: NewsData, key) => {
              return (
                <Suspense key={key}>
                  <NewsCardBig {...news} />
                </Suspense>
              );
            })}
        </div>
        <div className="col-span-12 grid grid-cols-1 lg:grid-cols-4 gap-y-6 gap-x-4">
          {popularNewsData &&
            popularNewsData.slice(1, 5).map((news: NewsData, key) => {
              return (
                <Suspense key={key}>
                  <NewsCard {...news} />
                </Suspense>
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
          {allNewsData &&
            allNewsData.slice(0, 8).map((news: NewsData, key) => {
              return (
                <Suspense key={key} fallback={'loading'}>
                  <NewsCard {...news} />
                </Suspense>
              );
            })}
        </div>
      </section>
    </>
  );
}
