require "rails_helper"

RSpec.describe ApplicationHelper, type: :helper do
  describe "#format_date" do
    it "formats a valid date string" do
      expect(helper.format_date("2024-07-18")).to eq("Thursday, July 18")
    end

    it "returns nil if date_string is nil" do
      expect(helper.format_date(nil)).to be_nil
    end

    it "returns the original string if parsing fails" do
      expect(helper.format_date("not-a-date")).to eq("not-a-date")
    end
  end
end
