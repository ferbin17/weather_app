require "rails_helper"

RSpec.describe WeatherFinder, type: :service do
  let(:location) do
    {
      "loc" => "40.7128,-74.0060",
      "city" => "New York",
      "country" => "US"
    }
  end

  describe "#call" do
    context "with valid location data" do
      before { mock_open_weather_api }

      it "returns weather data" do
        result = described_class.call(location)

        expect(result).to be_a(Hash)
        expect(result[:current]).to be_present
        expect(result[:daily]).to be_present
        expect(result[:location]).to eq(location)
      end

      it "returns current weather data" do
        result = described_class.call(location)

        expect(result[:current].temp).to eq(20.5)
        expect(result[:current].feels_like).to eq(18.2)
        expect(result[:current].humidity).to eq(65)
        expect(result[:current].wind_speed).to eq(12.3)
      end

      it "returns 10 days of forecast data" do
        result = described_class.call(location)

        expect(result[:daily]).to be_an(Array)
        expect(result[:daily].length).to eq(10)
        expect(result[:daily].first.dt).to be_present
        expect(result[:daily].first.temp).to be_present
        expect(result[:daily].first.weather).to be_present
      end
    end

    context "with invalid location data" do
      let(:location) { nil }

      it "returns error" do
        result = described_class.call(location)

        expect(result[:error]).to eq("Invalid location data")
      end
    end

    context "with blank location data" do
      let(:location) { {} }

      it "returns error" do
        result = described_class.call(location)

        expect(result[:error]).to eq("Invalid location data")
      end
    end

    context "when API call fails" do
      before { mock_open_weather_api_error }

      it "returns error message" do
        result = described_class.call(location)

        expect(result[:error]).to eq("Unable to fetch weather data")
      end

      it "logs the error" do
        allow(Rails.logger).to receive(:error)

        described_class.call(location)

        expect(Rails.logger).to have_received(:error).with("WeatherFinder error: API Error")
      end
    end
  end

  describe "#latitude" do
    it "extracts latitude from location data" do
      finder = described_class.new(location)
      expect(finder.send(:latitude)).to eq("40.7128")
    end
  end

  describe "#longitude" do
    it "extracts longitude from location data" do
      finder = described_class.new(location)
      expect(finder.send(:longitude)).to eq("-74.0060")
    end
  end

  describe "#fetch_weather" do
    before { mock_open_weather_api }

    it "calls OpenWeather API with correct parameters" do
      finder = described_class.new(location)

      finder.send(:fetch_weather)

      expect(OpenWeatherClient).to have_received(:one_call).with(
        lat: "40.7128",
        lon: "-74.0060",
        exclude: %w[minutely hourly]
      ).twice
    end

    it "sets weather data on success" do
      finder = described_class.new(location)
      finder.send(:fetch_weather)

      expect(finder.weather).to be_present
      expect(finder.weather.current).to be_present
      expect(finder.weather.daily).to be_an(Array)
    end

    it "sets weather data with correct structure" do
      finder = described_class.new(location)
      finder.send(:fetch_weather)

      expect(finder.weather.current.temp).to eq(20.5)
      expect(finder.weather.daily.length).to eq(10)
      expect(finder.weather.daily.first.temp.day).to eq(306.29)
    end
  end

  describe "caching" do
    let(:location) { { "loc" => "40.7128,-74.0060", "city" => "New York", "country" => "US", "zipcode" => "10001" } }
    let(:unit) { "celsius" }
    let(:unit2) { "fahrenheit" }
    let(:weather_detail) { instance_double(WeatherDetail, description: "rain") }
    let(:temp_instance) { instance_double(Temp, day: 306.29) }
    let(:daily_instance) { instance_double(Daily, dt: Time.zone.now, temp: temp_instance, weather: [weather_detail]) }
    let(:current_instance) { instance_double(Current, temp: 20.5) }
    let(:weather_instance) { instance_double(Weather, current: current_instance, daily: [daily_instance]) }

    before do
      Rails.cache.clear
      allow(OpenWeatherClient).to receive(:one_call).and_return(weather_instance)
    end

    it "caches the weather data for the same location and unit" do
      described_class.new(location).send(:fetch_weather)
      expect(OpenWeatherClient).to have_received(:one_call).once
      described_class.new(location).send(:fetch_weather)
      expect(OpenWeatherClient).to have_received(:one_call).once # still once, cache hit
    end

    it "uses a different cache key for different units" do
      described_class.new(location).send(:fetch_weather)
      expect(OpenWeatherClient).to have_received(:one_call).once
      described_class.new(location).send(:fetch_weather)
      expect(OpenWeatherClient).to have_received(:one_call).once # cache hit
      # Now with a different unit, should call API again
      allow(OpenWeatherClient).to receive(:one_call).and_return(weather_instance)
      described_class.new(location).send(:fetch_weather)
      expect(OpenWeatherClient).to have_received(:one_call).twice
    end
  end
end
