import type React from "react"
import type { ForecastDay, TemperatureUnit } from "../types/weather"

interface WeatherForecastProps {
  forecast: ForecastDay[]
  temperatureUnit: TemperatureUnit
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast, temperatureUnit }) => {
  // Format day name from date
  const formatDay = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { weekday: "long" })
  }

  // Get the temperature based on the selected unit
  const getMaxTemp = (day: ForecastDay) => {
    return temperatureUnit === "celsius" ? Math.round(day.day.maxtemp_c) : Math.round(day.day.maxtemp_f)
  }

  const getMinTemp = (day: ForecastDay) => {
    return temperatureUnit === "celsius" ? Math.round(day.day.mintemp_c) : Math.round(day.day.mintemp_f)
  }

  const tempUnit = temperatureUnit === "celsius" ? "°C" : "°F"

  return (
    <div className="mt-4 sm:mt-6">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 px-1 sm:px-0">3-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-1 sm:px-0">
        {forecast.map((day) => (
          <div
            key={day.date}
            className="bg-white/10 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 text-white transition-all duration-300 transform hover:scale-[1.02]"
          >
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h4 className="text-sm sm:text-base font-medium">{formatDay(day.date)}</h4>
              <img
                src={day.day.condition.icon || "/placeholder.svg"}
                alt={day.day.condition.text}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <p className="text-xs sm:text-sm text-white/80 mb-2">{day.day.condition.text}</p>
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <span className="text-base sm:text-lg font-semibold">
                {getMaxTemp(day)}
                {tempUnit}
              </span>
              <span className="text-sm sm:text-base text-white/70">
                {getMinTemp(day)}
                {tempUnit}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <div>
                <p className="text-white/70 mb-1">Humidity</p>
                <p>{day.day.avghumidity}%</p>
              </div>
              <div>
                <p className="text-white/70 mb-1">Rain Chance</p>
                <p>{day.day.daily_chance_of_rain}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherForecast
