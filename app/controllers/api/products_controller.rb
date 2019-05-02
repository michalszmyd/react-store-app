# frozen_string_literal: true

module Api
  class ProductsController < BaseController
    def index
      scope = Product.left_joins(:products_categories)

      products = ProductsFilterService
        .new(scope, params)
        .filtered_products
        .limit(params[:limit]).order(created_at: :desc)

      render json: products.as_json
    end

    def show
      product = Product.find(params[:id])

      render json: product.as_json
    end
  end
end
