import cloudyDay1 from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg';
import cloudyNight1 from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-1.svg';
import cloudyDay2 from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy-day-2.svg';
import cloudyNight2 from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-2.svg';
import cloudyNight3 from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy-night-3.svg';
import cloudy from '@/assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
import day from '@/assets/amcharts_weather_icons_1.0.0/animated/day.svg';
import night from '@/assets/amcharts_weather_icons_1.0.0/animated/night.svg';
import rainy1 from '@/assets/amcharts_weather_icons_1.0.0/animated/rainy-1.svg';
import rainy2 from '@/assets/amcharts_weather_icons_1.0.0/animated/rainy-2.svg';
import rainy3 from '@/assets/amcharts_weather_icons_1.0.0/animated/rainy-3.svg';
import rainy5 from '@/assets/amcharts_weather_icons_1.0.0/animated/rainy-5.svg';
import rainy6 from '@/assets/amcharts_weather_icons_1.0.0/animated/rainy-6.svg';
import snowy1 from '@/assets/amcharts_weather_icons_1.0.0/animated/snowy-1.svg';
import snowy2 from '@/assets/amcharts_weather_icons_1.0.0/animated/snowy-2.svg';
import snowy3 from '@/assets/amcharts_weather_icons_1.0.0/animated/snowy-3.svg';
import snowy4 from '@/assets/amcharts_weather_icons_1.0.0/animated/snowy-4.svg';
import snowy5 from '@/assets/amcharts_weather_icons_1.0.0/animated/snowy-5.svg';
import thunder from '@/assets/amcharts_weather_icons_1.0.0/animated/thunder.svg';
import mistDay from '@/assets/amcharts_weather_icons_1.0.0/animated/mist-day.svg';
import mistNight from '@/assets/amcharts_weather_icons_1.0.0/animated/mist-night.svg';
const weatherIcons = {
  1000: day, // Sunny
  '1000n': night, // Clear night
  1003: cloudyDay1, // Partly cloudy
  '1003n': cloudyNight1, // Partly cloudy at night
  1006: cloudyDay2, // Cloudy
  '1006n': cloudyNight2, // Cloudy at night
  1009: cloudy, // Overcast
  '1009n': cloudyNight3, // Overcast at night
  1030: mistDay, // Mist
  '1030n': mistNight, // Mist at night
  1063: rainy1, // Patchy rain possible
  '1063n': rainy1, // Patchy rain possible at night
  1066: snowy1, // Patchy snow possible
  '1066n': snowy1, // Patchy snow possible at night
  1069: snowy4, // Patchy sleet possible
  '1069n': snowy4, // Patchy sleet possible at night
  1072: rainy6, // Patchy freezing drizzle possible
  '1072n': rainy6, // Patchy freezing drizzle possible at night
  1087: thunder, // Thundery outbreaks possible
  '1087n': thunder, // Thundery outbreaks possible at night
  1114: snowy4, // Blowing snow
  '1114n': snowy4, // Blowing snow at night
  1117: snowy5, // Blizzard
  '1117n': snowy5, // Blizzard at night
  1135: mistDay, // Fog
  '1135n': mistNight, // Fog at night
  1147: mistDay, // Freezing fog
  '1147n': mistNight, // Freezing fog at night
  1150: rainy5, // Patchy light drizzle
  '1150n': rainy5, // Patchy light drizzle at night
  1153: rainy5, // Light drizzle
  '1153n': rainy5, // Light drizzle at night
  1168: rainy6, // Freezing drizzle
  '1168n': rainy6, // Freezing drizzle at night
  1171: rainy6, // Heavy freezing drizzle
  '1171n': rainy6, // Heavy freezing drizzle at night
  1180: rainy1, // Patchy light rain
  '1180n': rainy1, // Patchy light rain at night
  1183: rainy1, // Light rain
  '1183n': rainy1, // Light rain at night
  1186: rainy2, // Moderate rain at times
  '1186n': rainy2, // Moderate rain at times at night
  1189: rainy2, // Moderate rain
  '1189n': rainy2, // Moderate rain at night
  1192: rainy3, // Heavy rain at times
  '1192n': rainy3, // Heavy rain at times at night
  1195: rainy3, // Heavy rain
  '1195n': rainy3, // Heavy rain at night
  1198: rainy6, // Light freezing rain
  '1198n': rainy6, // Light freezing rain at night
  1201: rainy6, // Moderate or heavy freezing rain
  '1201n': rainy6, // Moderate or heavy freezing rain at night
  1204: snowy4, // Light sleet
  '1204n': snowy4, // Light sleet at night
  1207: snowy4, // Moderate or heavy sleet
  '1207n': snowy4, // Moderate or heavy sleet at night
  1210: snowy1, // Patchy light snow
  '1210n': snowy1, // Patchy light snow at night
  1213: snowy1, // Light snow
  '1213n': snowy1, // Light snow at night
  1216: snowy2, // Patchy moderate snow
  '1216n': snowy2, // Patchy moderate snow at night
  1219: snowy2, // Moderate snow
  '1219n': snowy2, // Moderate snow at night
  1222: snowy3, // Patchy heavy snow
  '1222n': snowy3, // Patchy heavy snow at night
  1225: snowy3, // Heavy snow
  '1225n': snowy3, // Heavy snow at night
  1237: snowy5, // Ice pellets
  '1237n': snowy5, // Ice pellets at night
  1240: rainy1, // Light rain shower
  '1240n': rainy1, // Light rain shower at night
  1243: rainy2, // Moderate or heavy rain shower
  '1243n': rainy2, // Moderate or heavy rain shower at night
  1246: rainy3, // Torrential rain shower
  '1246n': rainy3, // Torrential rain shower at night
  1249: snowy4, // Light sleet showers
  '1249n': snowy4, // Light sleet showers at night
  1252: snowy4, // Moderate or heavy sleet showers
  '1252n': snowy4, // Moderate or heavy sleet showers at night
  1255: snowy1, // Light snow showers
  '1255n': snowy1, // Light snow showers at night
  1258: snowy2
};

export default weatherIcons;
