import React from 'react';
import ProductPreview from '../products/ProductPreview';
import ProductService from '../../services/ProductService';
import { ArrowDown } from 'react-feather';

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
      <div className="text-center home-screen">
        <div className="banner">
          <div className="container panel">
            <h1>Welcome</h1>
            <h3>Discover items</h3>
            <p><ArrowDown /></p>
          </div>
        </div>
        { errors ?
          <div>{errors.join(', ')}</div>
        : null }
        <div className="products-board container">
          <h3>Last added</h3>
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
