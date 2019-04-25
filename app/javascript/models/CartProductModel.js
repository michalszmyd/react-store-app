class CartProductModel {
  constructor (params) {
    this.id = params.id;
    this.name = params.name;
    this.productId = params.product_id;
    this.quantity = params.quantity;
    this.price = params.price;
    this.imageUrl = params.image_url;
  }

  totalPrice = () => this.price * this.quantity;
}

export default CartProductModel;
