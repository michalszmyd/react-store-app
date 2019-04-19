import React from 'react';
import ProductService from '../../services/ProductService';

class Product extends React.Component {
  state = {
    product: {}
  }

  componentDidMount () {
    const productId = this.props.match.params.id;

    ProductService.find(productId).then((product) => {
      this.setState({
        product: product
      })
    })
  }

  render () {
    const { name, description, imageUrl } = this.state.product;

    return (
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
              <div className="action-button add-to-cart ">Add to cart</div>
            </div>
            <div className="col-md-6">
              <div className="action-button add-to-favorites">Add to favorites</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
