class V1::Api::UsersController < ApplicationController

  skip_before_action :authorize, only: :create

  def get_current_user
    render json: @current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private
    def user_params
      params.permit(:username, :password)
    end
end
