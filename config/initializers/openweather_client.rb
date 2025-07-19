# Global OpenWeather client configuration
require 'open-weather-ruby-client'

# Create a global OpenWeather client instance
OpenWeatherClient = OpenWeather::Client.new(
  api_key: Rails.application.credentials.openweather_api_key || "59913a1a514e21f872d00d7664032c75"
) 