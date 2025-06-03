import type React from "react"
import type { CurrentWeather as CurrentWeatherType, WeatherLocation, TemperatureUnit } from "../types/weather"
import { Droplets, Wind, Thermometer, Compass } from "lucide-react"

interface CurrentWeatherProps {
  current: CurrentWeatherType
  location: WeatherLocation
  temperatureUnit: TemperatureUnit
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ current, location, temperatureUnit }) => {
  // Format the date
  const formatDate = () => {
    const date = new Date()
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Determine if it's day or night
  const isDay = current.is_day === 1

  // Get the temperature based on the selected unit
  const temperature = temperatureUnit === "celsius" ? current.temp_c : current.temp_f
  const feelsLike = temperatureUnit === "celsius" ? current.feelslike_c : current.feelslike_f
  const tempUnit = temperatureUnit === "celsius" ? "°C" : "°F"

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 text-white transition-all duration-500 transform hover:scale-[1.01]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{location.name}</h2>
          <p className="text-sm sm:text-base text-white/80">
            {location.region}, {location.country}
          </p>
          <p className="text-white/70 text-xs sm:text-sm mt-1">{formatDate()}</p>
        </div>
        <div className="flex items-center justify-center sm:justify-start">
          <img
            src={current.condition.icon.replace("64x64", "128x128") || "/placeholder.svg"}
            alt={current.condition.text}
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
          <div className="ml-2">
            <p className="text-3xl sm:text-4xl font-bold">
              {Math.round(temperature)}
              {tempUnit}
            </p>
            <p className="text-sm sm:text-base text-white/80">{current.condition.text}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
        <div className="flex items-center p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
          <Thermometer size={18} className="sm:w-6 sm:h-6 text-blue-300 mr-2" />
          <div>
            <p className="text-white/70 text-xs sm:text-sm">Feels Like</p>
            <p className="text-sm sm:text-base font-semibold">
              {Math.round(feelsLike)}
              {tempUnit}
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
          <Droplets size={18} className="sm:w-6 sm:h-6 text-blue-300 mr-2" />
          <div>
            <p className="text-white/70 text-xs sm:text-sm">Humidity</p>
            <p className="text-sm sm:text-base font-semibold">{current.humidity}%</p>
          </div>
        </div>

        <div className="flex items-center p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
          <Wind size={18} className="sm:w-6 sm:h-6 text-blue-300 mr-2" />
          <div>
            <p className="text-white/70 text-xs sm:text-sm">Wind</p>
            <p className="text-sm sm:text-base font-semibold">
              {temperatureUnit === "celsius" ? `${current.wind_kph} km/h` : `${current.wind_mph} mph`}
            </p>
          </div>
        </div>

        <div className="flex items-center p-2 sm:p-3 bg-white/5 rounded-lg sm:rounded-xl">
          <Compass size={18} className="sm:w-6 sm:h-6 text-blue-300 mr-2" />
          <div>
            <p className="text-white/70 text-xs sm:text-sm">Direction</p>
            <p className="text-sm sm:text-base font-semibold">{current.wind_dir}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
