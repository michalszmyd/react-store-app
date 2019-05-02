# frozen_string_literal: true

class ProductsFilterService
  def initialize(scope, params)
    @scope = scope
    @params = params
  end

  def filtered_products
    @scope.where(category_filter)
  end

  private

  def category_filter
    return unless @params[:category_id]&.reject(&:blank?)&.any?

    { products_categories: { category_id: @params[:category_id] } }
  end
end
