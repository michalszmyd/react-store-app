# frozen_string_litearal: true

class CartProductForm
  def initialize(user, params:)
    @user = user
    @params = params
    @user_product = user.cart_products.find_or_initialize_by(product_id: params[:product_id])
  end

  def save
    if @user_product.new_record?
      @user_product.assign_attributes(@params)
      @user_product.save
    else
      @user_product.update quantity: @user_product.quantity + @params[:quantity].to_i
    end
  end
end
