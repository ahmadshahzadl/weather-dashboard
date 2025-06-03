"use client"

import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from "./components/SearchBar"
import CurrentWeather from "./components/CurrentWeather"
import WeatherForecast from "./components/WeatherForecast"
import WeatherDetails from "./components/WeatherDetails"
import UnitToggle from "./components/UnitToggle"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import getBackgroundByCondition from "./utils/backgroundUtils"
import { Cloud, CloudDrizzle, CloudLightning, CloudSnow, Sun } from "lucide-react"

function App() {
  const {
    weatherData,
    loading,
    error,
    locations,
    searchQuery,
    temperatureUnit,
    setSearchQuery,
    searchLocation,
    toggleTemperatureUnit,
    selectLocation,
  } = useWeather()

  const [background, setBackground] = useState("from-blue-400 to-sky-700")

  // Update background based on weather condition
  useEffect(() => {
    if (weatherData?.current) {
      const { gradient } = getBackgroundByCondition(weatherData.current.condition, weatherData.current.is_day === 1)
      setBackground(gradient)
    }
  }, [weatherData])

  // Animation states
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    setAnimateIn(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${background} transition-colors duration-1000 ease-in-out p-3 sm:p-4 md:p-8`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {weatherData?.current?.condition?.code && (
          <div className="absolute opacity-5 sm:opacity-10 right-0 top-0 hidden sm:block">
            {weatherData.current.condition.code === 1000 && <Sun size={300} className="text-yellow-300" />}
            {[1003, 1006, 1009].includes(weatherData.current.condition.code) && (
              <Cloud size={300} className="text-white" />
            )}
            {[1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(
              weatherData.current.condition.code,
            ) && <CloudDrizzle size={300} className="text-blue-200" />}
            {[1087, 1273, 1276, 1279, 1282].includes(weatherData.current.condition.code) && (
              <CloudLightning size={300} className="text-yellow-200" />
            )}
            {[1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(
              weatherData.current.condition.code,
            ) && <CloudSnow size={300} className="text-white" />}
          </div>
        )}
      </div>

      <div
        className={`max-w-4xl mx-auto transition-all duration-1000 ${animateIn ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
      >
        <header className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">Weather Forecast</h1>
          <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 px-2">
            Get accurate weather information for any location
          </p>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchLocation={searchLocation}
            locations={locations}
            selectLocation={selectLocation}
          />

          <UnitToggle temperatureUnit={temperatureUnit} toggleTemperatureUnit={toggleTemperatureUnit} />
        </header>

        <main className="px-1 sm:px-0">
          {loading && <LoadingSpinner />}

          {error && <ErrorMessage message={error} />}

          {weatherData && !loading && (
            <div className="transition-all duration-500 space-y-4 sm:space-y-6">
              <CurrentWeather
                current={weatherData.current}
                location={weatherData.location}
                temperatureUnit={temperatureUnit}
              />

              <WeatherForecast forecast={weatherData.forecast.forecastday} temperatureUnit={temperatureUnit} />

              <WeatherDetails current={weatherData.current} temperatureUnit={temperatureUnit} />
            </div>
          )}
        </main>

        <footer className="mt-8 sm:mt-10 text-center text-white/60 text-xs sm:text-sm px-4">
          <p>Powered by WeatherAPI.com • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
