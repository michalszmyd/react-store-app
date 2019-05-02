class Product < ApplicationRecord
  validates :name, :image_url, presence: true

  has_many :products_categories
  has_many :categories, through: :products_categories
end
