class ApplicationController < ActionController::API

  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :display_errors


  private

    def authorize
      @current_user = User.find_by_id(session[:user_id])
      render json: {"message": "You must login to continue"}, status: :unauthorized unless @current_user
    end

    def display_errors(exc)
      render json: {"errors": exc.record.errors.full_messages }, status: :unprocessable_entity
    end
end
