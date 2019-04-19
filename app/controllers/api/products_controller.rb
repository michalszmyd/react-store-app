# frozen_string_literal: true

module Api
  class ProductsController < BaseController
    def index
      products = Product.limit(params[:limit]).order(created_at: :desc)

      render json: products.as_json
    end

    def show
      product = Product.find(params[:id])

      render json: product.as_json
    end
  end
end
