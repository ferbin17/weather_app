module WeatherHelper
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

    temp = temperature
    case temp
    when -Float::INFINITY..0
      "text-blue-600"
    when 1..15
      "text-blue-500"
    when 16..25
      "text-green-600"
    when 26..35
      "text-orange-600"
    when 36..Float::INFINITY
      "text-red-600"
    end
  end

  def format_temperature(kelvin, _unit = "celsius")
    if temperature_unit == "celsius"
      "#{kelvin_to_celsius(kelvin).round}°C"
    else
      "#{kelvin_to_fahrenheit(kelvin).round}°F"
    end
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
