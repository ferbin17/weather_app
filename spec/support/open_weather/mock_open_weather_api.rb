class MockOpenWeatherApi
  class << self
    def one_call(*_args)
      MockWeatherResponse.new(
        current: generate_current_weather,
        daily: generate_daily_forecast(10)
      )
    end

    private

    def generate_current_weather
      MockCurrentWeather.new(
        temp: 20.5,
        feels_like: 18.2,
        humidity: 65,
        wind_speed: 12.3
      )
    end

    def generate_daily_forecast(days_count)
      base_date = Time.parse("2025-07-18 18:00:00 UTC")

      (0...days_count).map do |day_offset|
        current_date = base_date + day_offset.days
        MockDailyWeather.new(generate_daily_weather_data(current_date))
      end
    end

    def generate_daily_weather_data(date)
      {
        "dt" => date,
        "sunrise" => date.beginning_of_day + 11.hours + 19.minutes + 13.seconds,
        "sunset" => date.beginning_of_day + 25.hours + 25.minutes + 11.seconds,
        "summary" => "Expect a day of partly cloudy with rain",
        "temp" => generate_temperature_data,
        "feels_like" => generate_feels_like_data,
        "pressure" => 1017,
        "humidity" => 47,
        "dew_point" => 293.82,
        "wind_speed" => 5.05,
        "wind_deg" => 174,
        "wind_gust" => 9.55,
        "weather" => [generate_weather_data],
        "clouds" => 23,
        "rain" => 0.18,
        "uvi" => 11.04
      }
    end

    def generate_temperature_data
      MockTemperature.new(
        day: 306.29,
        min: 296.87,
        max: 307.07,
        night: 298.96,
        eve: 302.39,
        morn: 297.72
      )
    end

    def generate_feels_like_data
      MockFeelsLike.new(
        day: 308.88,
        night: 299.89,
        eve: 305.1,
        morn: 298.48
      )
    end

    def generate_weather_data
      MockWeather.new(
        icon: "10d",
        id: 500,
        main: "Rain",
        description: "light rain"
      )
    end
  end
end
