import React from 'react';
import ProductPreview from '../products/ProductPreview';
import ProductService from '../../services/ProductService';

class Home extends React.Component {
  state = {
    products: []
  }

  componentDidMount () {
    ProductService.recent().then((products) => {
      this.setState({ products: products })
    }).catch((json) => {
      json.then((data) => {
        this.setState({ errors: data.errors });
      })
    })
  }

  render () {
    const { products, errors } = this.state;

    return (
      <div className="text-center screen">
        <h1>Welcome</h1>
        <h3>Scroll down</h3>
        { errors ?
          <div>{errors.join(', ')}</div>
        : null }
        <div className="products-board container">
          <div className="row">
            { products.map((product) => (
              <ProductPreview product={product} key={product.id}/>
            )) }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
