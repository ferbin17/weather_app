class MockWeatherResponse
  attr_reader :current, :daily

  def initialize(current:, daily:)
    @current = current
    @daily = daily
  end
end

class MockCurrentWeather
  attr_reader :temp, :feels_like, :humidity, :wind_speed, :weather, :pressure, :visibility, :dt

  def initialize(temp:, feels_like:, humidity:, wind_speed:)
    @temp = temp
    @feels_like = feels_like
    @humidity = humidity
    @wind_speed = wind_speed
    @pressure = 1013
    @visibility = 10_000
    @dt = Time.current
    @weather = [MockWeather.new(
      icon: "10d",
      id: 500,
      main: "Rain",
      description: "light rain"
    )]
  end
end

class MockDailyWeather
  attr_reader :dt, :sunrise, :sunset, :summary, :temp, :feels_like, :pressure, :humidity, :dew_point, :wind_speed,
              :wind_deg, :wind_gust, :weather, :clouds, :rain, :uvi

  def initialize(data)
    @dt = data["dt"]
    @sunrise = data["sunrise"]
    @sunset = data["sunset"]
    @summary = data["summary"]
    @temp = data["temp"]
    @feels_like = data["feels_like"]
    @pressure = data["pressure"]
    @humidity = data["humidity"]
    @dew_point = data["dew_point"]
    @wind_speed = data["wind_speed"]
    @wind_deg = data["wind_deg"]
    @wind_gust = data["wind_gust"]
    @weather = data["weather"]
    @clouds = data["clouds"]
    @rain = data["rain"]
    @uvi = data["uvi"]
  end
end

class MockTemperature
  attr_reader :day, :min, :max, :night, :eve, :morn

  def initialize(params = {})
    @day = params[:day]
    @min = params[:min]
    @max = params[:max]
    @night = params[:night]
    @eve = params[:eve]
    @morn = params[:morn]
  end
end

class MockFeelsLike
  attr_reader :day, :night, :eve, :morn

  def initialize(day:, night:, eve:, morn:)
    @day = day
    @night = night
    @eve = eve
    @morn = morn
  end
end

class MockWeather
  attr_reader :icon, :id, :main, :description

  def initialize(icon:, id:, main:, description:)
    @icon = icon
    @id = id
    @main = main
    @description = description
  end
end
