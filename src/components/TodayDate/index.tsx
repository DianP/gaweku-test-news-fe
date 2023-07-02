'use server';

import moment from 'moment';
import { headers } from 'next/headers';
import React from 'react';

export const TodayDate = () => {
  const headersList = headers();

  const ip = headersList.get('x-vercel-ip');
  const forwardedFor = headersList.get('x-forwarded-for');
  const country = headersList.get('x-vercel-ip-country');
  const city = headersList.get('x-vercel-ip-city');
  const latidude = headersList.get('x-vercel-ip-latidude');
  const longitude = headersList.get('x-vercel-ip-longitude');

  console.log('ip', ip);
  console.log('forwardedFor', forwardedFor);
  console.log('country', country);
  console.log('city', city);
  console.log('latidude', latidude);
  console.log('longitude', longitude);

  const day = moment().format('dddd,');
  const date = moment().format('DD MMMM YYYY');
  return (
    <div className="flex gap-1">
      <span className="text-sm font-bold text-zinc-900 dark:text-white">{day}</span>
      <span className="text-sm text-zinc-900 dark:text-white">{date}</span>
    </div>
  );
};
