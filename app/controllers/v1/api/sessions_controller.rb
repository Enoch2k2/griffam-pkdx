class V1::Api::SessionsController < ApplicationController

  skip_before_action :authorize, only: :create

  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: {"errors": "Username or Password didn't match"}, status: :unprocessable_entity
    end
  end

  def destroy
    session.delete(:user_id)
    render json: {"message": "you signed out!"}, status: :ok
  end
end
