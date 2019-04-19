class Product < ApplicationRecord
  validates :name, :image_url, presence: true
end
