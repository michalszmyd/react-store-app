class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :users_products
  has_many :products, through: :users_products

  def cart_products
    users_products.joins(:product).select('products.*, users_products.*')
  end
end
