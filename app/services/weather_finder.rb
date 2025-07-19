class WeatherFinder
  include Callable

  attr_reader :location, :weather, :error

  def initialize(location)
    @location = location
    @error = { error: "Invalid location data" } if location.blank?

    fetch_weather if error.blank?
  end

  def call
    return error if error.present?

    {
      current: weather.current,
      daily: weather.daily,
      location: location
    }
  end

  private

  def latitude
    @latitude ||= location[:loc].split(",").first
  end

  def longitude
    @longitude ||= location[:loc].split(",").last
  end

  def fetch_weather
    @weather = OpenWeatherClient.one_call(lat: latitude, lon: longitude, exclude: %w[minutely hourly])
  rescue StandardError => e
    Rails.logger.error "WeatherFinder error: #{e.message}"
    @error = { error: "Unable to fetch weather data" }
  end
end
