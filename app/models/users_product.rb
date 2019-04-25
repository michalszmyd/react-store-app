class UsersProduct < ApplicationRecord
  validates :user_id, :product_id, :quantity, presence: true

  belongs_to :user
  belongs_to :product
end
