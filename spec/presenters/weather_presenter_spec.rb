require "rails_helper"

RSpec.describe WeatherPresenter do
  let(:location) do
    {
      "loc" => "40.7128,-74.0060",
      "city" => "New York",
      "country" => "US"
    }
  end

  let(:weather_data) do
    {
      current: instance_double(MockCurrentWeather,
                               temp: 20.5,
                               feels_like: 18.2,
                               humidity: 65,
                               wind_speed: 12.3,
                               pressure: 1013,
                               visibility: 10_000,
                               weather: [instance_double(MockWeather, description: "partly cloudy")],
                               dt: Time.current),
      daily: [
        instance_double(MockDailyWeather,
                        dt: Time.current,
                        temp: instance_double(MockTemperature, max: 25.0, min: 15.0),
                        weather: [instance_double(MockWeather, description: "sunny", icon: "01d")]),
        instance_double(MockDailyWeather,
                        dt: 1.day.from_now,
                        temp: instance_double(MockTemperature, max: 26.0, min: 16.0),
                        weather: [instance_double(MockWeather, description: "cloudy", icon: "02d")])
      ]
    }
  end

  let(:presenter) { described_class.new(weather_data, location) }

  describe "#current_temperature" do
    it "returns formatted temperature" do
      expect(presenter.current_temperature).to eq("21°C")
    end

    context "when temperature is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, temp: nil) } }

      it "returns N/A" do
        expect(presenter.current_temperature).to eq("N/A")
      end
    end
  end

  describe "#current_description" do
    it "returns capitalized weather description" do
      expect(presenter.current_description).to eq("Partly cloudy")
    end

    context "when weather description is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, weather: []) } }

      it "returns default message" do
        expect(presenter.current_description).to eq("Weather data unavailable")
      end
    end
  end

  describe "#feels_like" do
    it "returns formatted feels like temperature" do
      expect(presenter.feels_like).to eq("18°C")
    end

    context "when feels like temperature is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, feels_like: nil) } }

      it "returns N/A" do
        expect(presenter.feels_like).to eq("N/A")
      end
    end
  end

  describe "#humidity" do
    it "returns formatted humidity" do
      expect(presenter.humidity).to eq("65%")
    end

    context "when humidity is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, humidity: nil) } }

      it "returns N/A" do
        expect(presenter.humidity).to eq("N/A")
      end
    end
  end

  describe "#wind_speed" do
    it "returns formatted wind speed" do
      expect(presenter.wind_speed).to eq("12 km/h")
    end

    context "when wind speed is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, wind_speed: nil) } }

      it "returns N/A" do
        expect(presenter.wind_speed).to eq("N/A")
      end
    end
  end

  describe "#pressure" do
    it "returns formatted pressure" do
      expect(presenter.pressure).to eq("1013 hPa")
    end

    context "when pressure is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, pressure: nil) } }

      it "returns N/A" do
        expect(presenter.pressure).to eq("N/A")
      end
    end
  end

  describe "#visibility" do
    it "returns formatted visibility" do
      expect(presenter.visibility).to eq("10 km")
    end

    context "when visibility is not available" do
      let(:weather_data) { { current: instance_double(MockCurrentWeather, visibility: nil) } }

      it "returns N/A" do
        expect(presenter.visibility).to eq("N/A")
      end
    end
  end

  describe "#weather_status" do
    context "when weather data has error" do
      let(:weather_data) { { error: "Some error" } }

      it "returns error" do
        expect(presenter.weather_status).to eq("error")
      end
    end

    context "when weather data is valid" do
      it "returns success" do
        expect(presenter.weather_status).to eq("success")
      end
    end
  end

  describe "#weather_data?" do
    context "when weather data is present and valid" do
      it "returns true" do
        expect(presenter.weather_data?).to be true
      end
    end

    context "when weather data has error" do
      let(:weather_data) { { error: "Some error" } }

      it "returns false" do
        expect(presenter.weather_data?).to be false
      end
    end

    context "when weather data is nil" do
      let(:weather_data) { nil }

      it "returns false" do
        expect(presenter.weather_data?).to be false
      end
    end
  end

  describe "#error_message" do
    context "when weather data has error" do
      let(:weather_data) { { error: "Custom error message" } }

      it "returns the error message" do
        expect(presenter.error_message).to eq("Custom error message")
      end
    end

    context "when weather data has no error" do
      it "returns default error message" do
        expect(presenter.error_message).to eq("Unable to retrieve weather data")
      end
    end
  end

  describe "#forecast_days" do
    it "returns formatted forecast data" do
      forecast = presenter.forecast_days
      expect(forecast).to be_an(Array)
      expect(forecast.length).to eq(1) # Only one day after skipping today

      day = forecast.first
      expect(day[:date]).to match(/^[A-Za-z]+, [A-Za-z]+ \d+$/) # Matches format like "Monday, January 15"
      expect(day[:high]).to eq(26) # Mock data is already in Celsius
      expect(day[:low]).to eq(16) # Mock data is already in Celsius
      expect(day[:description]).to eq("Cloudy")
    end

    context "when daily forecast is not available" do
      let(:weather_data) { { daily: nil } }

      it "returns empty array" do
        expect(presenter.forecast_days).to eq([])
      end
    end
  end
end
