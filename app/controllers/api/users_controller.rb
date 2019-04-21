# frozen_string_literal: true

module Api
  class UsersController < BaseController
    def create
      user = User.new(user_params)
      if user.save
        sign_in(user, by_pass: true)
        render json: user.as_json, status: :created
      else
        render json: { errors: user.errors.messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
end
