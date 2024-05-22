import Image from 'next/image';
import humidity from '@/assets/weather-icons/humidity.svg';
import windSpeed from '@/assets/weather-icons/wind-speed.svg';
import precipitation from '@/assets/weather-icons/precipitation.svg';
import pressure from '@/assets/weather-icons/pressure.svg';
import uvIndex from '@/assets/weather-icons/uv-index.svg';
import windDirection from '@/assets/weather-icons/wind-direction.svg';

export default function WeatherDetailGrid({ weather }) {
  const fields = [
    {
      icon: windSpeed,
      field: 'Wind-Speed',
      value: weather.current.wind_kph + ' km/hr'
    },
    {
      icon: windDirection,
      field: 'Wind-Direction',
      value: weather.current.wind_dir
    },
    {
      icon: humidity,
      field: 'Humidity',
      value: weather.current.humidity
    },
    {
      icon: precipitation,
      field: 'Precipitation',
      value: weather.current.precip_mm + ' mm'
    },
    {
      icon: pressure,
      field: 'Pressure',
      value: weather.current.pressure_mb + ' mb'
    },
    {
      icon: uvIndex,
      field: 'UV-Index',
      value: weather.current.uv
    }
  ];
  return (
    <div className="grid grid-cols-2 m-8 gap-x-8 md:gap-x-16 gap-y-4">
      {fields.map((field) => (
        <div
          key={field.field}
          className="flex justify-start items-center gap-4"
        >
          <Image src={field.icon} alt={field.field} width={40} height={40} />
          <span className="text-xl">{field.value}</span>
        </div>
      ))}
    </div>
  );
}
