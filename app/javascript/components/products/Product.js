import React from 'react';
import ProductsService from '../../services/ProductsService';
import CartProductModel from '../../models/CartProductModel';
import ProductQuantity from './ProductQuantity';

class Product extends React.Component {
  state = {
    product: {},
    quantity: 1
  }

  componentDidMount () {
    const productId = this.props.match.params.id;

    ProductsService.find(productId).then((product) => {
      this.setState({
        product: product
      })
    })
  }

  addProductToCart = () => {
    const state = this.state;

    const params = {
      product_id: state.product.id,
      quantity: state.quantity
    }

    this.props.addProductToCart(params);
    this.setState({
      quantity: 1
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const { name, price, description, imageUrl } = this.state.product;
    const { quantity } = this.state;

    return (
      <div className="container">
        <div className="hero-product row">
          <div className="col-md-6">
            <img src={imageUrl} />
          </div>
          <div className="col-md-6 product-info">
            <h1>{name}</h1>
            <h5>Price: ${price}</h5>
            <div className="product-description">
              <p>{description}</p>
            </div>
            <ProductQuantity quantity={quantity} onChange={this.onChange} />
            <div className="actions row">
              <div className="col-md-6">
                <div className="action-button add-to-cart" onClick={this.addProductToCart}>Add to cart</div>
              </div>
              <div className="col-md-6">
                <div className="action-button add-to-favorites">Add to favorites</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
