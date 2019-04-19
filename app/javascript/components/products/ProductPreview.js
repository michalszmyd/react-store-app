import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ProductPreview extends React.Component {
  render () {
    const { id, name, imageUrl } = this.props.product;

    return (
      <div className="product col-md-4">
        <h3>{name}</h3>
        <img src={imageUrl} />
        <Link className="action-button" to={`/products/${id}`}>Read more</Link>
      </div>
    )
  }
}

export default ProductPreview;
