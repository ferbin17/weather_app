class WeatherController < ApplicationController
  def index
    location = LocationFinder.call(set_user_ip)
    weather_data = WeatherFinder.call(location)

    @presenter = WeatherPresenter.new(weather_data, location)
  end
end
