class ApplicationController < ActionController::Base
  before_action :set_user_ip

  private

  def set_user_ip
    @set_user_ip = request.remote_ip == "::1" ? "8.8.8.8" : request.remote_ip
  end
end
