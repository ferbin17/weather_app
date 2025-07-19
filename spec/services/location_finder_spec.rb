require "rails_helper"

RSpec.describe LocationFinder, type: :service do
  let(:ip_address) { "8.8.8.8" }

  describe "#call" do
    context "with valid IP address" do
      it "returns location data" do
        result = described_class.call(ip_address)

        expect(result).to be_a(Hash)
        expect(result["loc"]).to be_present
        expect(result["city"]).to be_present
        expect(result["country"]).to be_present
      end
    end

    context "with localhost IP" do
      let(:ip_address) { "127.0.0.1" }

      it "returns hash with nil values" do
        result = described_class.call(ip_address)

        expect(result).to be_a(Hash)
        expect(result).to eq({ zipcode: nil, region: nil })
      end
    end

    context "with private IP address" do
      let(:ip_address) { "192.168.1.1" }

      it "returns hash with nil values" do
        result = described_class.call(ip_address)

        expect(result).to be_a(Hash)
        expect(result).to eq({ zipcode: nil, region: nil })
      end
    end

    context "when geocoding fails" do
      before do
        allow(Geocoder).to receive(:search).and_return([])
      end

      it "returns nil" do
        result = described_class.call(ip_address)

        expect(result).to be_nil
      end
    end

    context "when geocoding raises an error" do
      before do
        allow(Geocoder).to receive(:search).and_raise(StandardError.new("Geocoding error"))
      end

      it "returns nil" do
        result = described_class.call(ip_address)

        expect(result).to be_nil
      end
    end
  end
end
