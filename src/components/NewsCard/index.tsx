'use static';

import { formatDateWithTimezone } from '@/utils/formatDate';
import { NewsThumbnail } from '@components';
import { getHttpHeaders } from '@lib';
import type { NewsData } from '@types';
import { getFavicon } from '@utils';
import Image from 'next/image';
import Link from 'next/link';

export const NewsCard = async ({ ...props }: NewsData) => {
  const { thumbnail, title, url, source, publishedAt } = props;
  const { httpHeaders } = await getHttpHeaders();

  return (
    <Link href={url} target="_blank">
      <div className="flex flex-col gap-4 h-full">
        <div className="col-span-1">
          <NewsThumbnail src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col h-full justify-between px-2 lg:px-0">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Image
                src={getFavicon(url)}
                width={20}
                height={20}
                alt={source + ' icon'}
                className="rounded-sm object-cover dark:bg-white"
              />
              <span className="font-bold text-sm text-blue-500">{source}</span>
            </div>
            <h1 className="text-base font-bold font-serif capitalize">{title}</h1>
          </div>
          <p className="text-sm text-zinc-500 capitalize mt-4">
            {formatDateWithTimezone(publishedAt, httpHeaders.timezone as string)}
          </p>
        </div>
      </div>
    </Link>
  );
};
