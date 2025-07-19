class WeatherPresenter
  include ActionView::Helpers::NumberHelper

  attr_reader :weather_data, :location

  def initialize(weather_data, location)
    @weather_data = weather_data
    @location = location
  end

  def data_from_cache?
    weather_data[:from_cache]
  end

  def current_temperature
    return "N/A" unless current_weather&.temp

    "#{current_weather.temp.round}°C"
  end

  def current_description
    weather_detail = current_weather&.weather&.first

    weather_detail&.description&.capitalize || "Weather data unavailable"
  end

  def feels_like
    return "N/A" unless current_weather&.feels_like

    "#{current_weather.feels_like.round}°C"
  end

  def high_temperature
    return "N/A" unless today_forecast

    "#{today_forecast.temp.max.round}°C"
  end

  def low_temperature
    return "N/A" unless today_forecast

    "#{today_forecast.temp.min.round}°C"
  end

  def humidity
    return "N/A" unless current_weather&.humidity

    "#{current_weather.humidity}%"
  end

  def wind_speed
    return "N/A" unless current_weather&.wind_speed

    "#{current_weather.wind_speed.round} km/h"
  end

  def pressure
    return "N/A" unless current_weather&.pressure

    "#{current_weather.pressure} hPa"
  end

  def visibility
    return "N/A" unless current_weather&.visibility

    "#{(current_weather.visibility / 1000.0).round} km"
  end

  def forecast_days
    return [] unless weather_data&.dig(:daily) && weather_data[:daily].any?

    format_forecast_data
  end

  def weather_status
    return "error" if weather_data[:error]

    "success"
  end

  def weather_data?
    weather_data.present? && weather_status == "success"
  end

  def error_message
    weather_data[:error] || "Unable to retrieve weather data"
  end

  private

  def current_weather
    return nil if error?

    @current_weather ||= weather_data[:current]
  end

  def daily_forecast
    return nil if error?

    @daily_forecast ||= weather_data[:daily]
  end

  def today_forecast
    return @today_forecast if @today_forecast

    return nil unless daily_forecast && current_weather

    today = current_weather.dt.to_date
    @today_forecast = daily_forecast.find { |item| item.dt.to_date == today }
  rescue StandardError
    nil
  end

  def format_forecast_data
    return [] unless daily_forecast

    # Skip first day (today) and get next 5 days
    daily_forecast.slice(1, 5).map do |day_forecast|
      weather_detail = day_forecast.weather.first

      {
        date: day_forecast.dt.strftime("%A, %B %d"),
        high: day_forecast.temp.max.round,
        low: day_forecast.temp.min.round,
        description: weather_detail.description.capitalize,
        icon: weather_detail.icon
      }
    end
  rescue StandardError => e
    Rails.logger.error "Error formatting forecast data: #{e.message}"
    []
  end

  def error?
    weather_data[:error].present?
  end
end
