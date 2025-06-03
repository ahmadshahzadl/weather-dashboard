import { WeatherData, LocationSearchResult } from '../types/weather';

const API_KEY = 'df00e55046784920a44121601252305';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const getWeatherData = async (
  location: string,
  days: number = 3
): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=no&alerts=no`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to fetch weather data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const searchLocations = async (query: string): Promise<LocationSearchResult[]> => {
  if (!query || query.length < 2) return [];
  
  try {
    const response = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to search locations');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error searching locations:', error);
    throw error;
  }
};