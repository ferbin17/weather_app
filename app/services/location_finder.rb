require "geocoder"

class LocationFinder
  include Callable

  def initialize(ip_address)
    @ip_address = ip_address
  end

  def call
    @location = begin
      Geocoder.search(@ip_address).first
    rescue StandardError => e
      Rails.logger.error("Geocoder error: #{e.message}")
      nil
    end
    return unless @location

    {
      city: city,
      loc: loc,
      zipcode: zipcode,
      region: @location.state,
      country: @location.country
    }
  end

  private

  def city
    @location.city || @location.data["address"]["county"]
  end

  def zipcode
    @location.try(:postal).presence || @location.data["address"]["postcode"]
  end

  def loc
    @location.data["loc"].presence || [@location.data["lat"], @location.data["lon"]].join(",")
  end
end
