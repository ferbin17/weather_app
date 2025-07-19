require "rails_helper"

RSpec.describe WeatherHelper, type: :helper do
  describe "#weather_card_class" do
    it "returns base class for success" do
      expect(helper.weather_card_class("success")).to include("bg-white/90")
    end

    it "returns error class for error" do
      expect(helper.weather_card_class("error")).to include("border-red-200")
    end

    it "returns default class for other" do
      expect(helper.weather_card_class("other")).to include("border-gray-200")
    end
  end

  describe "#temperature_class" do
    it "returns gray for nil" do
      expect(helper.temperature_class(nil)).to eq("text-gray-400")
    end

    it "returns blue for <= 0" do
      expect(helper.temperature_class(-5)).to eq("text-blue-600")
    end

    it "returns blue for 1..15" do
      expect(helper.temperature_class(10)).to eq("text-blue-500")
    end

    it "returns green for 16..25" do
      expect(helper.temperature_class(20)).to eq("text-green-600")
    end

    it "returns orange for 26..35" do
      expect(helper.temperature_class(30)).to eq("text-orange-600")
    end

    it "returns red for > 35" do
      expect(helper.temperature_class(40)).to eq("text-red-600")
    end
  end

  describe "#format_temperature" do
    before { allow(helper).to receive(:params).and_return({ unit: "celsius" }) }

    it "formats kelvin to celsius by default" do
      expect(helper.format_temperature(300)).to eq("27°C")
    end

    it "formats kelvin to fahrenheit if unit is set" do
      allow(helper).to receive(:params).and_return({ unit: "fahrenheit" })
      expect(helper.format_temperature(300)).to eq("80°F")
    end
  end

  describe "kelvin conversions" do
    it "converts kelvin to celsius" do
      expect(helper.send(:kelvin_to_celsius, 300)).to be_within(0.1).of(26.85)
    end

    it "converts kelvin to fahrenheit" do
      expect(helper.send(:kelvin_to_fahrenheit, 300)).to be_within(0.1).of(80.33)
    end
  end
end
