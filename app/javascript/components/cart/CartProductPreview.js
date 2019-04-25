import React from 'react';
import { X } from 'react-feather';

class CartProductPreview extends React.Component {
  onDelete = () => this.props.removeProduct(this.props.cartProduct.id);

  render () {
    const { name, quantity, price, imageUrl, totalPrice } = this.props.cartProduct;

    return (
      <div className="cart-product row">
        <div className="col-md-4">
          <img src={imageUrl} />
        </div>
        <div className="col-md-8">
          <div>
            {name}
            <X onClick={this.onDelete} />
          </div>
          <div>{quantity} X {price}</div>
          <div>{totalPrice()}</div>
        </div>
      </div>
    )
  }
}

export default CartProductPreview;
