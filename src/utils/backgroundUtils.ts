import { WeatherCondition } from '../types/weather';

type TimeOfDay = 'day' | 'night';

interface BackgroundConfig {
  gradient: string;
  backgroundImage?: string;
}

const getBackgroundByCondition = (
  condition: WeatherCondition,
  isDay: boolean
): BackgroundConfig => {
  const timeOfDay: TimeOfDay = isDay ? 'day' : 'night';
  const conditionCode = condition.code;
  
  // Clear sky
  if (conditionCode === 1000) {
    return timeOfDay === 'day'
      ? { gradient: 'from-blue-400 to-sky-700' }
      : { gradient: 'from-gray-900 to-blue-900' };
  }
  
  // Partly cloudy
  if (conditionCode === 1003) {
    return timeOfDay === 'day'
      ? { gradient: 'from-blue-300 to-blue-600' }
      : { gradient: 'from-gray-800 to-blue-900' };
  }
  
  // Cloudy
  if ([1006, 1009].includes(conditionCode)) {
    return timeOfDay === 'day'
      ? { gradient: 'from-gray-300 to-blue-500' }
      : { gradient: 'from-gray-800 to-gray-900' };
  }
  
  // Mist, fog
  if ([1030, 1135, 1147].includes(conditionCode)) {
    return timeOfDay === 'day'
      ? { gradient: 'from-gray-300 to-gray-500' }
      : { gradient: 'from-gray-700 to-gray-900' };
  }
  
  // Rain
  if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(conditionCode)) {
    return timeOfDay === 'day'
      ? { gradient: 'from-gray-500 to-blue-700' }
      : { gradient: 'from-gray-800 to-blue-900' };
  }
  
  // Thunderstorm
  if ([1087, 1273, 1276, 1279, 1282].includes(conditionCode)) {
    return timeOfDay === 'day'
      ? { gradient: 'from-gray-700 to-purple-900' }
      : { gradient: 'from-gray-900 to-purple-900' };
  }
  
  // Snow
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(conditionCode)) {
    return timeOfDay === 'day'
      ? { gradient: 'from-blue-100 to-blue-300' }
      : { gradient: 'from-gray-600 to-blue-900' };
  }
  
  // Default
  return timeOfDay === 'day'
    ? { gradient: 'from-blue-400 to-sky-700' }
    : { gradient: 'from-gray-900 to-blue-900' };
};

export default getBackgroundByCondition;