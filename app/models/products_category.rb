class ProductsCategory < ApplicationRecord
  belongs_to :product
  belongs_to :category

  validates :product_id, :category_id, presence: true
end
