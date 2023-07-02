'use server';

import { Separator } from '@components';
import { IconMapPin } from '@tabler/icons-react';
import axios from 'axios';
import moment from 'moment';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

interface WeatherDataProps {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
}

const getWeatherData = async (query: string): Promise<WeatherDataProps> => {
  const WeatherAPI_URL = process.env.WEATHERAPI_URL || 'http://api.weatherapi.com/v1';
  const WeatherAPI_KEY = process.env.WEATHERAPI_API_KEY;

  const { data } = await axios.get<WeatherDataProps>(
    `${WeatherAPI_URL}/current.json?key=${WeatherAPI_KEY}&q=${query}&aqi=no`
  );

  return data;
};

export const WeatherWidget = async () => {
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const city = headersList.get('x-vercel-ip-city');
  const country = headersList.get('x-vercel-ip-country');

  console.log('forwardedFor:', forwardedFor);
  console.log('city:', city);
  console.log('country:', country);

  if (!forwardedFor && !country && !city) {
    const day = moment(new Date()).format('dddd,');
    const date = moment(new Date()).format('DD MMMM YYYY');
    return (
      <div className="flex gap-1 text-zinc-950 dark:text-white">
        <span className="text-sm font-bold">{day}</span>
        <span className="text-sm">{date}</span>
      </div>
    );
  }

  let data: WeatherDataProps | null = null;
  let locationName = '';
  let locationCountry = '';

  if (forwardedFor) {
    data = await getWeatherData(forwardedFor);
    locationName = data.location.name;
    locationCountry = data.location.country;
  } else if (city) {
    data = await getWeatherData(city);
    locationName = data.location.name;
    locationCountry = data.location.country;
  } else if (country) {
    data = await getWeatherData(country);
    locationName = data.location.name;
    locationCountry = data.location.country;
  }

  if (data) {
    const day = moment(new Date(data.location.localtime)).format('dddd,');
    const date = moment(new Date(data.location.localtime)).format('DD MMMM YYYY');

    return (
      <div className="flex items-center justify-between gap-4 border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="relative aspect-square w-10 h-10">
            <Image src={'https:' + data.current.condition.icon} fill={true} alt={data.current.condition.text} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-zinc-950 dark:text-white">{data.current.temp_c}°C</span>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">{data.current.condition.text}</span>
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
            {locationName}, {locationCountry}
          </span>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};
