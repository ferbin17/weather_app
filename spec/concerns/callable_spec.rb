require "rails_helper"
class TestCallableService
  include Callable

  attr_reader :param

  def initialize(param)
    @param = param
  end

  def call
    "Processed: #{param}"
  end
end

RSpec.describe Callable do
  let(:service_call) { TestCallableService.call("test") }

  describe ".call" do
    it "creates instance and calls the call method" do
      expect(service_call).to eq("Processed: test")
    end
  end

  describe "service object pattern" do
    it "allows direct instantiation and call" do
      service = TestCallableService.new("direct_param")
      result = service.call

      expect(result).to eq("Processed: direct_param")
    end

    it "allows class-level call method" do
      result = TestCallableService.call("class_param")

      expect(result).to eq("Processed: class_param")
    end
  end
end
