import { formatDateWithTimezone } from '@/utils/formatDate';
import { NewsThumbnail, Separator } from '@components';
import { getHttpHeaders } from '@lib';
import type { NewsData } from '@types';
import { getFavicon } from '@utils';
import Image from 'next/image';
import Link from 'next/link';

export const NewsCardBig = async ({ ...props }: NewsData) => {
  const { thumbnail, title, url, source, description, publishedAt } = props;
  const { httpHeaders } = await getHttpHeaders();

  return (
    <Link href={url} target="_blank">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-6 gap-y-4">
        <div className="col-span-1">
          <NewsThumbnail src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col gap-4 px-2 lg:px-0">
          <div className="flex gap-2">
            <Image
              src={getFavicon(url)}
              width={20}
              height={20}
              alt={source + ' icon'}
              className="rounded-sm object-cover dark:bg-white"
            />
            <span className="font-bold text-sm  text-blue-500">{source}</span>
          </div>

          <h1 className="text-2xl font-bold font-serif capitalize">{title}</h1>

          <p className="text-sm text-zinc-500 capitalize">
            {formatDateWithTimezone(publishedAt, httpHeaders.timezone as string)}
          </p>
          <p className="text-md text-zinc-500 font-serif capitalize mt-4">{description}</p>
        </div>
        <Separator orientation="horizontal" className="block lg:hidden" />
      </div>
    </Link>
  );
};
