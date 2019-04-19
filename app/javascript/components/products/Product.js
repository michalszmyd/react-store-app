import React from 'react';
import ProductService from '../../services/ProductService';

class Product extends React.Component {
  state = {
    product: {}
  }

  componentDidMount () {
    ProductService.find(this.props.match.params.id).then((product) => {
      this.setState({
        product: product
      })
    })
  }

  render () {
    const { name, description, imageUrl } = this.state.product;

    return (
      <div className="product">
        <h1>{name}</h1>
      </div>
    )
  }
}

export default Product;
