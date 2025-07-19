class WeatherFinder
  include Callable

  attr_reader :location, :weather, :error

  def initialize(location)
    @location = location
    @error = { error: "Invalid location data" } if location.blank?

    if error.blank?
      @from_cache = Rails.cache.exist?(cache_key)
      fetch_weather
    end
  end

  def call
    return error if error.present?

    {
      current: weather.current,
      daily: weather.daily,
      location: location,
      from_cache: from_cache?
    }
  end

  private

  def fetch_weather
    @weather = Rails.cache.fetch(cache_key, expires_in: 30.minutes) do
      OpenWeatherClient.one_call(lat: latitude, lon: longitude, exclude: %w[minutely hourly])
    end
  rescue StandardError => e
    Rails.logger.error "WeatherFinder error: #{e.message}"
    @error = { error: "Unable to fetch weather data" }
  end

  def from_cache?
    @from_cache
  end

  def latitude
    @latitude ||= location[:loc].split(",").first
  end

  def longitude
    @longitude ||= location[:loc].split(",").last
  end

  def zipcode
    @zipcode ||= location[:zipcode]
  end

  def cache_key
    @cache_key ||= "weather:#{zipcode}"
  end
end
