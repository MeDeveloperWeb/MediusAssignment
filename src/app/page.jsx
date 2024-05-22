import getWeather from './actions';
import Weather from './_components/Weather';

export default async function Home() {
  const weather = await getWeather('lucknow');

  return (
    <main className="flex flex-col justify-center items-center flex-1">
      <Weather weather={weather} />
    </main>
  );
}
