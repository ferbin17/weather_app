require "rails_helper"

RSpec.describe ApplicationController do
  controller do
    def index
      render plain: "OK"
    end
  end

  it "stores user ip from request" do
    request.remote_ip = "123.45.67.89"

    get :index

    expect(assigns(:user_ip)).to eq("123.45.67.89")
  end
end
