# frozen_string_litearal: true

class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :name, :price, :quantity, :image_url
end
