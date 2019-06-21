# frozen_string_literal: true

module Api
  class BaseController < ApplicationController
    respond_to :json
    layout false
    skip_before_action :verify_authenticity_token
  end
end
