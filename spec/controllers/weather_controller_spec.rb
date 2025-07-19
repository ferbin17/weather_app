require "rails_helper"

RSpec.describe WeatherController do
  describe "GET #index" do
    let(:mock_location) do
      {
        "loc" => "40.7128,-74.0060",
        "city" => "New York",
        "country" => "US",
        "zipcode" => "10001",
        "region" => "NY"
      }
    end

    let(:mock_weather_data) do
      mock_response = MockOpenWeatherApi.one_call
      {
        current: mock_response.current,
        daily: mock_response.daily,
        location: mock_location
      }
    end

    before do
      allow(LocationFinder).to receive(:call).and_return(mock_location)
      allow(WeatherFinder).to receive(:call).and_return(mock_weather_data)
    end

    it "returns http success" do
      get :index

      expect(response).to have_http_status(:success)
    end

    it "assigns @presenter" do
      get :index

      expect(assigns(:presenter)).to be_a(WeatherPresenter)
    end

    it "renders the index template" do
      get :index

      expect(response).to render_template(:index)
    end

    context "when location is found" do
      it "calls LocationFinder with user IP" do
        allow(LocationFinder).to receive(:call).and_return(mock_location)

        get :index

        expect(LocationFinder).to have_received(:call).with(an_instance_of(String))
      end

      it "calls WeatherFinder with location data" do
        allow(WeatherFinder).to receive(:call).and_return(mock_weather_data)

        get :index

        expect(WeatherFinder).to have_received(:call).with(mock_location)
      end
    end

    context "when weather data is available" do
      it "assigns presenter with weather data" do
        get :index

        presenter = assigns(:presenter)
        expect(presenter.weather_data?).to be true
      end

      it "assigns presenter with correct weather data" do
        get :index

        presenter = assigns(:presenter)
        expect(presenter.current_temperature).to eq("21°C")
        expect(presenter.forecast_days.length).to eq(5)
      end
    end

    context "when weather data is not available" do
      let(:mock_weather_data) { { error: "Unable to fetch weather data" } }

      it "assigns presenter with error data" do
        get :index

        presenter = assigns(:presenter)
        expect(presenter.weather_status).to eq("error")
      end
    end
  end
end
