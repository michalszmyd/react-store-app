# frozen_string_literal: true

module Api
  class CategoriesController < BaseController
    def index
      render json: Category.all
    end
  end
end
