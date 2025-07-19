module LocationHelper
  def location_name(location)
    if location&.dig("city")
      location["city"]
    elsif location&.dig("formatted_address")
      location["formatted_address"]
    else
      "Unknown Location"
    end
  end
end
