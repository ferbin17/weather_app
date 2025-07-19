module ApplicationHelper
  def format_date(date_string)
    return date_string unless date_string

    Date.parse(date_string).strftime("%A, %B %d")
  rescue Date::Error
    date_string
  end
end
