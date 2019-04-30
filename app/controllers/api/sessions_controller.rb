# frozen_string_literal: true

module Api
  class SessionsController < Devise::SessionsController
    respond_to :json

    def csrf_token
      render json: { csrf_token: form_authenticity_token }
    end
  end
end
