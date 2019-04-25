import React from 'react';
import UsersService from '../../services/UsersService';
import { ShoppingBag } from 'react-feather';

import CartProductPreview from './CartProductPreview';

class CartHeader extends React.Component {
  constructor (props) {
    super(props);

    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    this.usersService = new UsersService(csrfToken);
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
        <div className="shopping-bag">
          <ShoppingBag />Shopping bag
        </div>
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
