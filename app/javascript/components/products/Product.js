import React from 'react';
import ProductsService from '../../services/ProductsService';
import CartProductModel from '../../models/CartProductModel';

class Product extends React.Component {
  state = {
    product: {}
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
    const params = {
      product_id: this.state.product.id,
      quantity: 1
    }

    this.props.addProductToCart(params);
  }

  render () {
    const { name, description, imageUrl } = this.state.product;

    return (
      <div className="container">
        <div className="hero-product row">
          <div className="col-md-6">
            <img src={imageUrl} />
          </div>
          <div className="col-md-6 product-info">
            <h1>{name}</h1>
            <div className="product-description">
              <p>{description}</p>
            </div>
            <div className="actions row">
              <div className="col-md-6">
                <div className="action-button add-to-cart" onClick={this.addProductToCart.bind(this)}>Add to cart</div>
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
