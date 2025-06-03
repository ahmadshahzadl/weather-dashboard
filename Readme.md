# Weather Dashboard 🌤️

A beautiful, responsive weather dashboard built with React and TypeScript that provides real-time weather information and forecasts for any location worldwide.

![Weather Dashboard](https://img.shields.io/badge/React-18.x-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any location
- **3-Day Forecast**: View detailed weather forecasts for the next 3 days
- **Geolocation Support**: Automatically detects and displays weather for your current location
- **Location Search**: Search for weather in any city worldwide with autocomplete suggestions
- **Temperature Units**: Toggle between Celsius and Fahrenheit
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic Backgrounds**: Background colors change based on weather conditions and time of day
- **Weather Details**: Comprehensive weather information including humidity, wind, pressure, UV index, and more
- **Beautiful UI**: Modern glass-morphism design with smooth animations

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **WeatherAPI.com** - Weather data provider
- **Lucide React** - Beautiful icon library
- **Geolocation API** - Browser location services

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your WeatherAPI key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

   **Note**: You'll need to update the API key in `src/services/weatherService.ts` or use environment variables.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🔑 API Setup

This project uses [WeatherAPI.com](https://www.weatherapi.com/) for weather data.

1. Sign up for a free account at [WeatherAPI.com](https://www.weatherapi.com/)
2. Get your API key from the dashboard
3. Replace the API key in `src/services/weatherService.ts` or use environment variables

**Free tier includes:**
- 1 million calls per month
- Current weather data
- 3-day forecast
- Location search

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── CurrentWeather.tsx
│   ├── WeatherForecast.tsx
│   ├── WeatherDetails.tsx
│   ├── SearchBar.tsx
│   ├── UnitToggle.tsx
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── hooks/              # Custom React hooks
│   └── useWeather.ts
├── services/           # API services
│   └── weatherService.ts
├── types/              # TypeScript type definitions
│   └── weather.ts
├── utils/              # Utility functions
│   └── backgroundUtils.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎯 Usage

### Basic Usage

1. **Automatic Location**: The app will request permission to access your location and display weather for your current location
2. **Search Locations**: Use the search bar to find weather for any city worldwide
3. **Toggle Units**: Click the °C/°F toggle to switch between temperature units
4. **View Details**: Scroll down to see detailed weather information and 3-day forecast

### Features Overview

- **Current Weather**: Temperature, feels like, humidity, wind speed and direction
- **Weather Details**: Pressure, precipitation, UV index, visibility
- **3-Day Forecast**: Daily high/low temperatures, conditions, humidity, and rain chance
- **Dynamic UI**: Background and icons change based on weather conditions

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: Geolocation features require HTTPS in production.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [WeatherAPI.com](https://www.weatherapi.com/) for providing weather data
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Vite](https://vitejs.dev/) for the amazing development experience

## 📧 Contact

Ahmad Shahzad - ahmadshahzad0@outlook.com

Project Link: https://github.com/ahmadshahzadl/weather-dashboard

---

Made with ❤️ and ☀️
```

