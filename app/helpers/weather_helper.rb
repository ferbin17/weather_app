require "weather_icons_helper"

module WeatherHelper
  include WeatherIconsHelper

  def weather_card_class(weather_status)
    base_class = "bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
    case weather_status
    when "success"
      base_class
    when "error"
      "#{base_class} border-2 border-red-200"
    else
      "#{base_class} border-2 border-gray-200"
    end
  end

  def temperature_class(temperature)
    return "text-gray-400" unless temperature

    case temperature
    when -Float::INFINITY..0 then "text-blue-600"
    when 1..15 then "text-blue-500"
    when 16..25 then "text-green-600"
    when 26..35 then "text-orange-600"
    when 36..Float::INFINITY then "text-red-600"
    end
  end

  ICON_MAP = {
    /rain/ => :rain_icon,
    /cloud/ => :cloud_icon,
    /snow/ => :snow_icon,
    /storm/ => :storm_icon,
    /fog|mist/ => :fog_icon,
    /clear|sun/ => :sun_icon
  }.freeze

  def weather_icon(description, size = "w-8 h-8")
    return sun_icon(size) unless description

    key = ICON_MAP.keys.find { |re| description.downcase =~ re }
    method = ICON_MAP[key] || :sun_icon
    send(method, size)
  end

  def large_weather_icon(description)
    weather_icon(description, "w-24 h-24")
  end

  def format_temperature(kelvin, unit = "celsius")
    unit ||= "celsius"
    value = unit == "celsius" ? kelvin_to_celsius(kelvin) : kelvin_to_fahrenheit(kelvin)
    "#{value.round}#{unit == 'celsius' ? '°C' : '°F'}"
  end

  def temperature_unit
    @temperature_unit ||= params[:unit]
  end

  private

  def kelvin_to_celsius(kelvin)
    kelvin.to_f - 273.15
  end

  def kelvin_to_fahrenheit(kelvin)
    ((kelvin.to_f - 273.15) * 9 / 5) + 32
  end
end
