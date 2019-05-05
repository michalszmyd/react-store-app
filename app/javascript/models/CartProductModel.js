class CartProductModel {
  constructor ({ id, name, product_id, quantity, price, image_url }) {
    this.id = id;
    this.name = name;
    this.productId = product_id;
    this.quantity = quantity;
    this.price = price;
    this.imageUrl = image_url;
  }

  totalPrice = () => {
    if (this.totalPriceValue) {
      return this.totalPriceValue;
    } else {
      return this.totalPriceValue = this.price * this.quantity;
    }
  }

  totalPriceToString = () => `\$${this.totalPrice()}`;

  priceToString = () => `\$${this.price}`
}

export default CartProductModel;
