module WeatherIconsHelper
  # rubocop:disable Rails/OutputSafety
  def sun_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-yellow-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 11 5.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7 12a5 5 0 1110 0 5 5 0 01-10 0zM12 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 12a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm16 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety

  # rubocop:disable Rails/OutputSafety
  def cloud_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-gray-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety

  # rubocop:disable Rails/OutputSafety
  def rain_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-blue-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        <path d="M7 17l3 3 3-3M7 20l3 3 3-3"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety

  # rubocop:disable Rails/OutputSafety
  def snow_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-blue-300 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        <path d="M8 18l2-2 2 2M8 21l2-2 2 2M14 18l2-2 2 2M14 21l2-2 2 2"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety

  # rubocop:disable Rails/OutputSafety
  def storm_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        <path d="M13 13l-3 5h4l-3 5"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety

  # rubocop:disable Rails/OutputSafety
  def fog_icon(size = "w-8 h-8")
    raw <<~SVG
      <svg class="#{size} text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        <path d="M3 15h18M3 18h18"/>
      </svg>
    SVG
  end
  # rubocop:enable Rails/OutputSafety
end
