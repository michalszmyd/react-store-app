# frozen_string_litearal: true

module Api
  class UsersProductsController < BaseController
    before_action :authenticate_user!

    def index
      render json: current_user.cart_products, each_serializer: CartProductSerializer
    end

    def create
      product_form = CartProductForm.new(current_user, params:users_product_params)

      if product_form.save
        cart_products = current_user.cart_products

        render json: cart_products, each_serializer: CartProductSerializer, status: :created
      else
        render json: product_form.errors, status: :unprocessable_entity
      end
    end

    def destroy
      current_user.users_products.find(params[:id]).destroy!

      render json: {}, status: :ok
    end

    private

    def users_product_params
      params.require(:users_product).permit(:product_id, :quantity)
    end
  end
end
