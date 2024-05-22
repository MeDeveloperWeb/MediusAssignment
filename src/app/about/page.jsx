import about from './_lib/about';
import cloudy from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import day from '@/assets/amcharts_weather_icons_1.0.0/animated/day.svg';
import night from '@/assets/amcharts_weather_icons_1.0.0/animated/night.svg';
import Image from 'next/image';

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center p-8 border-solid border-4">
        Our Story
      </h1>
      <p className="mx-8 m-4 text-justify">{about}</p>

      <div className="flex gap-4 flex-wrap">
        {[cloudy, day, night].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="sample"
            height={400}
            width={400}
            className="flex-1 min-w-[400px]"
          />
        ))}
      </div>
    </section>
  );
}
