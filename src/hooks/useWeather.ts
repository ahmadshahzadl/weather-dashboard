import { useState, useEffect } from 'react';
import { WeatherData, LocationSearchResult, TemperatureUnit } from '../types/weather';
import { getWeatherData, searchLocations } from '../services/weatherService';

interface UseWeatherReturn {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  locations: LocationSearchResult[];
  searchQuery: string;
  temperatureUnit: TemperatureUnit;
  setSearchQuery: (query: string) => void;
  searchLocation: (location: string) => Promise<void>;
  toggleTemperatureUnit: () => void;
  selectLocation: (location: LocationSearchResult) => Promise<void>;
}

export const useWeather = (): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [locations, setLocations] = useState<LocationSearchResult[]>([]);
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  // Get user's location when component mounts
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const locationString = `${latitude},${longitude}`;
              const data = await getWeatherData(locationString);
              setWeatherData(data);
              setError(null);
            } catch (err) {
              setError('Failed to get weather for your location. Please search for a location.');
              console.error(err);
            } finally {
              setLoading(false);
            }
          },
          (err) => {
            console.error(err);
            setError('Location access denied. Please search for a location.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser. Please search for a location.');
      }
    };

    getUserLocation();
  }, []);

  // Search for locations as user types
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (searchQuery.length > 2) {
        try {
          const results = await searchLocations(searchQuery);
          setLocations(results);
        } catch (err) {
          console.error('Error searching locations:', err);
        }
      } else {
        setLocations([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const searchLocation = async (location: string) => {
    if (!location) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await getWeatherData(location);
      setWeatherData(data);
      setSearchQuery('');
      setLocations([]);
    } catch (err) {
      setError('Failed to get weather data. Please try a different location.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectLocation = async (location: LocationSearchResult) => {
    await searchLocation(`${location.lat},${location.lon}`);
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit(prev => prev === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  return {
    weatherData,
    loading,
    error,
    locations,
    searchQuery,
    temperatureUnit,
    setSearchQuery,
    searchLocation,
    toggleTemperatureUnit,
    selectLocation
  };
};