import React from 'react';

class Product extends React.Component {
  render () {
    const { name, description, imageUrl } = this.props.product;

    return (
      <div className="product col-md-3">
        <h4>{name}</h4>
        <p>{description}</p>
        <img src={imageUrl} />
      </div>
    )
  }
}

export default Product;
