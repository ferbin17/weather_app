class WeatherController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:show]

  def index
    @address = set_user_ip

    fetch_weather_details
  end

  def show
    @address = weather_params[:address]

    if @address.present?
      fetch_weather_details

      render json: { html: render_to_string(partial: "weather_details", locals: { presenter: @presenter }) },
             status: :ok
    else
      render json: { error: "Address is required" }, status: :bad_request
    end
  end

  private

  def fetch_weather_details
    location = LocationFinder.call(@address)
    weather_data = WeatherFinder.call(location)

    @presenter = WeatherPresenter.new(weather_data, location)
  end

  def weather_params
    params.require(:weather).permit(:address)
  end
end
