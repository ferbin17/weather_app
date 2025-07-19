require "rails_helper"

RSpec.describe LocationHelper, type: :helper do
  describe "#location_name" do
    it "returns city if present" do
      expect(helper.location_name({ "city" => "New York" })).to eq("New York")
    end

    it "returns formatted_address if city is missing" do
      expect(helper.location_name({ "formatted_address" => "123 Main St" })).to eq("123 Main St")
    end

    it "returns 'Unknown Location' if neither is present" do
      expect(helper.location_name({})).to eq("Unknown Location")
      expect(helper.location_name(nil)).to eq("Unknown Location")
    end
  end
end
