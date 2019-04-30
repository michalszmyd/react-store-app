import React from 'react';
import UsersService from '../../services/UsersService';
import { ShoppingBag } from 'react-feather';

import CartProductPreview from './CartProductPreview';

import { connect } from 'react-redux';

class CartHeader extends React.Component {
  constructor (props) {
    super(props);

    this.usersService = new UsersService(this.props.csrfToken);
  }

  state = {
    cartProducts: []
  }

  componentDidMount () {
    UsersService.cartProducts().then((products) => {
      this.setState({
        cartProducts: products
      })
    })
  }

  addProduct = (params) => {
    this.usersService.token = this.props.csrfToken;

    this.usersService.addProductToCart(params).then((cartProducts) => {
      this.setState({
        cartProducts: cartProducts
      })
    })
  }

  removeProduct = (id) => {
    this.usersService.removeProductFromCart({ cartItemId: id }).then(() => {
      let cartProducts = this.state.cartProducts.filter((product) => {
        if (product.id !== id) return product;
      })

      this.setState({ cartProducts: cartProducts })
    })
  }

  render () {
    const cartProducts = this.state.cartProducts;

    return (
      <div className="cart-header">
        <li className="shopping-bag">
          <span className="nav-link"><ShoppingBag width="20" height="20"/>Shopping bag</span>
        </li>
        <div className="shopping-bag-body">
          { cartProducts.map((cartProduct) => (
            <CartProductPreview
              key={cartProduct.id}
              removeProduct={this.removeProduct}
              cartProduct={cartProduct}
            />
          )) }
          <div className="text-center">
            Checkout
          </div>
        </div>
      </div>
    )
  }
}

export default CartHeader;
