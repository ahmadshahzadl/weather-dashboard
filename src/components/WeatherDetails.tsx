import type React from "react"
import type { CurrentWeather as CurrentWeatherType, TemperatureUnit } from "../types/weather"
import { Droplets, Wind, Gauge, Sun, CloudRain, Eye } from "lucide-react"

interface WeatherDetailsProps {
  current: CurrentWeatherType
  temperatureUnit: TemperatureUnit
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ current, temperatureUnit }) => {
  return (
    <div className="mt-4 sm:mt-6 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 text-white mx-1 sm:mx-0">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Weather Details</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <Droplets size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">Humidity</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">{current.humidity}%</p>
        </div>

        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <Gauge size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">Pressure</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">
            {temperatureUnit === "celsius" ? `${current.pressure_mb} mb` : `${current.pressure_in} in`}
          </p>
        </div>

        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <Wind size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">Wind</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">
            {temperatureUnit === "celsius" ? `${current.wind_kph} km/h` : `${current.wind_mph} mph`}
          </p>
        </div>

        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <CloudRain size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">Precipitation</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">
            {temperatureUnit === "celsius" ? `${current.precip_mm} mm` : `${current.precip_in} in`}
          </p>
        </div>

        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <Sun size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">UV Index</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">{current.uv}</p>
        </div>

        <div className="flex flex-col p-2 sm:p-0">
          <div className="flex items-center mb-1 sm:mb-2">
            <Eye size={16} className="sm:w-[18px] sm:h-[18px] text-blue-300 mr-2" />
            <span className="text-xs sm:text-sm text-white/80">Visibility</span>
          </div>
          <p className="text-base sm:text-xl font-semibold">
            {temperatureUnit === "celsius" ? `${current.vis_km} km` : `${current.vis_miles} mi`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails
