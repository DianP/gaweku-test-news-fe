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

async function getWeatherData(query: string): Promise<WeatherDataProps> {
  const WeatherAPI_URL = process.env.WEATHERAPI_URL || 'http://api.weatherapi.com/v1';
  const WeatherAPI_KEY = process.env.WEATHERAPI_API_KEY;

  //simulate slow network
  //await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`${WeatherAPI_URL}/current.json?key=${WeatherAPI_KEY}&q=${query}&aqi=no`, {
    cache: 'no-store',
  });

  return res.json();
}

export { getWeatherData };
