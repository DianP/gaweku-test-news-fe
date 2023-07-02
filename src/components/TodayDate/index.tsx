'use server';

import moment from 'moment';
import { headers } from 'next/headers';
import React from 'react';

export const TodayDate = () => {
  const headersList = headers();
  const referer = headersList.get('x-vercel-ip-country');
  console.log(referer);

  const day = moment().format('dddd,');
  const date = moment().format('DD MMMM YYYY');
  return (
    <div className="flex gap-1">
      <span className="text-sm font-bold text-zinc-900 dark:text-white">{day}</span>
      <span className="text-sm text-zinc-900 dark:text-white">{date}</span>
    </div>
  );
};
