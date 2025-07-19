# Global OpenWeather client configuration
require 'open-weather-ruby-client'

# Create a global OpenWeather client instance
OpenWeatherClient = OpenWeather::Client.new(
  api_key: Rails.application.credentials.openweather_api_key
) 