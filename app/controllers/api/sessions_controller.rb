# frozen_string_literal: true

module Api
  class SessionsController < Devise::SessionsController
    respond_to :json
  end
end
