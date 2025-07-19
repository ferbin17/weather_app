# Weather App

A modern Rails + Tailwind CSS weather dashboard that provides real-time weather details and a 5-day forecast for any location.

## Features
- Search weather by city or coordinates
- Toggle between Celsius and Fahrenheit (AJAX, no page reload)
- Responsive, modern UI with Tailwind CSS
- Weather icons and dynamic styling
- Caching of weather data (Redis in production, memory/Redis in development)
- Location detection by IP (with dev-friendly localhost handling)
- "Change Location" and "Back to Home" navigation
- Clear error and empty state handling
- "Cached result" indicator for cached weather data

## Functionality
- Enter a city or coordinates to get current weather and a 5-day forecast
- Change temperature units with a toggle switch (AJAX)
- Weather data is cached for 30 minutes per location/unit
- All weather data is fetched from the OpenWeather API

## Setup Instructions

### Prerequisites
- Ruby 3.x
- Rails 7.x
- Redis (for caching)
- Node.js & Yarn (for JS/CSS assets)

### 1. Clone the repository
```sh
git clone <repo-url>
cd weather_app
```

### 2. Install dependencies
```sh
bundle install
yarn install
```

### 3. Set up the database
```sh
bin/rails db:setup
```

### 4. Set up credentials
You **must** add your OpenWeather API key to Rails credentials:
```sh
bin/rails credentials:edit
```
Add:
```yaml
openweather_api_key: YOUR_OPENWEATHER_API_KEY
```

### 5. Start Redis (for caching)
```sh
redis-server
```

### 6. Start the Rails server (with Tailwind and JS assets)
```sh
bin/dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Production Setup
- Set `RAILS_ENV=production`
- Precompile assets: `bin/rails assets:precompile`
- Set up your production database and run migrations
- Set `REDIS_URL` env variable if not using localhost
- Ensure your OpenWeather API key is present in production credentials
- Start Redis and your Rails server

## API Key Requirement
**You must obtain a free API key from [OpenWeather](https://openweathermap.org/api) to fetch weather details and forecasts.**
- Add your API key to Rails credentials as shown above.

## Testing
- Run all specs with:
```sh
bundle exec rspec
```

## License
MIT
