"use client"

import type React from "react"
import type { FormEvent } from "react"
import type { LocationSearchResult } from "../types/weather"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchLocation: (location: string) => Promise<void>
  locations: LocationSearchResult[]
  selectLocation: (location: LocationSearchResult) => Promise<void>
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  searchLocation,
  locations,
  selectLocation,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      searchLocation(searchQuery)
    }
  }

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto px-2 sm:px-0">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-10 sm:pl-12 pr-8 sm:pr-10 text-sm sm:text-base rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all shadow-lg"
        />
        <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
          <Search size={18} className="sm:w-5 sm:h-5 text-white/70" />
        </div>
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
        >
          Search
        </button>
      </form>

      {locations.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl max-h-48 sm:max-h-60 overflow-auto">
          <ul className="py-1">
            {locations.map((location) => (
              <li
                key={`${location.name}-${location.lat}-${location.lon}`}
                className="px-3 sm:px-4 py-2 hover:bg-white/20 cursor-pointer transition-colors text-white text-sm sm:text-base"
                onClick={() => selectLocation(location)}
              >
                {location.name}
                {location.region ? `, ${location.region}` : ""}, {location.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
