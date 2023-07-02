import { Separator } from '@components';
import { getHttpHeaders } from '@lib';
import { IconMapPin } from '@tabler/icons-react';
import moment from 'moment';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { getWeatherData } from './getWeatherData';

async function WeatherWidget() {
  const httpHeaders = await getHttpHeaders();

  if (httpHeaders?.httpHeaders.city) {
    const res = await getWeatherData(httpHeaders?.httpHeaders.city);
    const day = moment(new Date(res.location.localtime)).format('dddd,');
    const date = moment(new Date(res.location.localtime)).format('DD MMMM YYYY');

    return (
      <Suspense fallback={<div>Loading Widget...</div>}>
        <div className="flex items-center justify-between gap-4 border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-10 h-10">
              <Image src={'https:' + res.current.condition.icon} fill={true} alt={res.current.condition.text} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-950 dark:text-white">{res.current.temp_c}°C</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-500">{res.current.condition.text}</span>
            </div>
          </div>
          <Separator orientation="vertical" className="h-8" />
          <div className="flex flex-col">
            <div className="flex gap-1 text-zinc-950 dark:text-white">
              <span className="text-sm font-bold">{day}</span>
              <span className="text-sm">{date}</span>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              <IconMapPin size={16} className="inline mr-1" />
              {res.location.name}, {res.location.country}
            </span>
          </div>
        </div>
      </Suspense>
    );
  }

  if (httpHeaders?.httpHeaders.country) {
    const res = await getWeatherData(httpHeaders?.httpHeaders.country);
    const day = moment(new Date(res.location.localtime)).format('dddd,');
    const date = moment(new Date(res.location.localtime)).format('DD MMMM YYYY');

    return (
      <Suspense fallback={<div>Loading Widget...</div>}>
        <div className="flex items-center justify-between gap-4 border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="relative aspect-square w-10 h-10">
              <Image src={'https:' + res.current.condition.icon} fill={true} alt={res.current.condition.text} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-zinc-950 dark:text-white">{res.current.temp_c}°C</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-500">{res.current.condition.text}</span>
            </div>
          </div>
          <Separator orientation="vertical" className="h-8" />
          <div className="flex flex-col">
            <div className="flex gap-1 text-zinc-950 dark:text-white">
              <span className="text-sm font-bold">{day}</span>
              <span className="text-sm">{date}</span>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              <IconMapPin size={16} className="inline mr-1" />
              {res.location.name}, {res.location.country}
            </span>
          </div>
        </div>
      </Suspense>
    );
  }

  const day = moment(new Date()).format('dddd,');
  const date = moment(new Date()).format('DD MMMM YYYY');

  return (
    <Suspense fallback={<div>Loading Widget...</div>}>
      <div className="flex gap-1 text-zinc-950 dark:text-white justify-center">
        <span className="text-sm font-bold">{day}</span>
        <span className="text-sm">{date}</span>
      </div>
    </Suspense>
  );
}

export { WeatherWidget };
