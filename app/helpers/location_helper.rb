module LocationHelper
  def location_name(location)
    location[:city] || location[:region] || location[:country] || "Unknown Location"
  end
end
