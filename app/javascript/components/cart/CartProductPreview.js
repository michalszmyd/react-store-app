import React from 'react';
import { Router, Link } from 'react-router-dom';
import { X } from 'react-feather';

class CartProductPreview extends React.Component {
  onDelete = () => this.props.removeProduct(this.props.cartProduct.id);

  render () {
    const { productId, name, quantity, imageUrl, totalPriceToString, priceToString } = this.props.cartProduct;

    return (
      <div className="cart-product row">
        <div className="remove-item" onClick={this.onDelete}>
          <X />
        </div>
        <div className="col-md-4">
          <img src={imageUrl} />
        </div>
        <div className="col-md-8">
          <div><Link to={`/products/${productId}`}>{name}</Link></div>
          <div>{quantity} x {priceToString()}</div>
          <div>Total: {totalPriceToString()}</div>
        </div>
      </div>
    )
  }
}

export default CartProductPreview;
