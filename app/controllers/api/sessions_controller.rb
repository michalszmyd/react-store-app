# frozen_string_literal: true

module Api
  class SessionsController < Devise::SessionsController
    skip_before_action :verify_authenticity_token
    respond_to :json

    def csrf_token
      render json: { csrf_token: form_authenticity_token }
    end

    def create
      user = User.find_by(email: session_params[:email])

      if user && user.valid_password?(session_params[:password])
        render json: {
          id: user.id,
          email: user.email,
          token: JwtService.encode({ id: user.id })
        }, status: :ok
      else
        render json: { errors: { email_or_password: 'invalid' } }, status: :unprocessable_entity
      end
    end

    def session_params
      params.require(:user).permit(:email, :password)
    end
  end
end
