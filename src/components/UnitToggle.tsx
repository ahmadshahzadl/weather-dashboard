"use client"

import type React from "react"
import type { TemperatureUnit } from "../types/weather"

interface UnitToggleProps {
  temperatureUnit: TemperatureUnit
  toggleTemperatureUnit: () => void
}

const UnitToggle: React.FC<UnitToggleProps> = ({ temperatureUnit, toggleTemperatureUnit }) => {
  return (
    <div className="flex items-center justify-center mt-3 sm:mt-4 px-2 sm:px-0">
      <div
        className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-0.5 sm:p-1 border border-white/20 cursor-pointer"
        onClick={toggleTemperatureUnit}
      >
        <div
          className={`py-1 px-2 sm:px-3 text-sm sm:text-base rounded-full transition-all duration-300 ${
            temperatureUnit === "celsius" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
          }`}
        >
          °C
        </div>
        <div
          className={`py-1 px-2 sm:px-3 text-sm sm:text-base rounded-full transition-all duration-300 ${
            temperatureUnit === "fahrenheit" ? "bg-white/20 text-white" : "text-white/70 hover:text-white"
          }`}
        >
          °F
        </div>
      </div>
    </div>
  )
}

export default UnitToggle
