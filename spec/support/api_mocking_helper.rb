module ApiMockingHelper
  def mock_open_weather_api
    allow(OpenWeatherClient).to receive(:one_call).and_return(MockOpenWeatherApi.one_call)
  end

  def mock_open_weather_api_error(error_message = "API Error")
    allow(OpenWeatherClient).to receive(:one_call).and_raise(StandardError.new(error_message))
  end

  def mock_open_weather_api_with_custom_response(response)
    allow(OpenWeatherClient).to receive(:one_call).and_return(response)
  end
end

RSpec.configure do |config|
  config.include ApiMockingHelper
end
