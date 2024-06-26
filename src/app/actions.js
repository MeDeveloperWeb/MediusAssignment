'use server';

import weatherIcons from './_lib/weatherIcons';

export default async function getWeather(city = 'pune') {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`,
    { cache: 'no-store' }
  );

  if (!response.ok)
    return {
      error: 'City not Found or Something else went wrong! Please Try again.'
    };

  const data = await response.json();

  const icon =
    weatherIcons[
      `${data.current.condition.code}${data.current.is_day ? '' : 'n'}`
    ] || `https:${data.current.condition.icon}`;

  return {
    ...data,
    icon
  };
}
