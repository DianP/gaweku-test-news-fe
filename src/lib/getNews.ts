'use server';

import type { NewsResponse } from '@types';

export interface GetNewsQuery {
  provider: string | null;
  page: string | null;
  filter: string | null;
  search?: string | null;
}

export async function getNews({
  provider = null,
  page = null,
  filter = null,
  search = null,
}: GetNewsQuery): Promise<NewsResponse> {
  const apiUrl = process.env.NEWS_API_URL;

  let url = `${apiUrl}news?`;

  url += provider === null ? '' : `&provider=${provider}`;
  url += page === null ? '' : `&page=${page}`;
  url += filter === null ? '' : `&filter=${filter}`;
  url += search === null ? '' : `&search=${search}`;

  const res = await fetch(url, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return data;
}
