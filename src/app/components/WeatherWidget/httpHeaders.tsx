'use server';

import { headers } from 'next/headers';

interface HttpHeaders {
  httpHeaders: {
    forwardedFor: string | null;
    city: string | null;
    country: string | null;
  };
}

async function getHttpHeaders(): Promise<HttpHeaders> {
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const city = headersList.get('x-vercel-ip-city');
  const country = headersList.get('x-vercel-ip-country');

  return {
    httpHeaders: {
      forwardedFor,
      city,
      country,
    },
  };
}

export { getHttpHeaders };
