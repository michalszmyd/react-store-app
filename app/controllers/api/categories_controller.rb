# frozen_string_literal: true

module Api
  class CategoriesController < BaseController
    def index
      render json: Category.distinct.joins(:products_categories)
    end
  end
end
