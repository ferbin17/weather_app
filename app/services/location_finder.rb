require "geocoder"

class LocationFinder
  include Callable

  def initialize(ip_address)
    @ip_address = ip_address
  end

  def call
    begin
      result = Geocoder.search(@ip_address).first
    rescue StandardError => e
      Rails.logger.error("Geocoder error: #{e.message}")
    end
    return unless result

    result.data.slice("loc", "city", "country").merge(zipcode: result.postal, region: result.state)
  end
end
