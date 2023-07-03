'use server';

import { headers } from 'next/headers';

interface HttpHeaders {
  httpHeaders: {
    city: string | null;
    country: string | null;
    timezone: string | null;
    forwardedFor: string | null;
  };
}

async function getHttpHeaders(): Promise<HttpHeaders> {
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const city = headersList.get('x-vercel-ip-city');
  const country = headersList.get('x-vercel-ip-country');
  const timezone = headersList.get('x-vercel-ip-timezone');

  return {
    httpHeaders: {
      city,
      country,
      timezone,
      forwardedFor,
    },
  };
}

export { getHttpHeaders };
