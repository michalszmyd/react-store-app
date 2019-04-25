import ApiService from './ApiService';
import UserModel from '../models/UserModel';
import CartProductModel from '../models/CartProductModel';

class UsersService {
  constructor (token) {
    this.token = token;
  }

  static cartProducts = () => (
    ApiService.get({ url: 'users_products' })
      .then((json) => json.map((value) => new CartProductModel(value)))
  )

  addProductToCart = (params) => (
    ApiService.post({
      body: JSON.stringify({ users_product: params }),
      url: 'users_products',
      csrfToken: this.token,
    }).then((json) => json.map((value) => new CartProductModel(value)))
  )

  removeProductFromCart = (params) => (
    ApiService.delete({
      url: `users_products/${params.cartItemId}`,
      csrfToken: this.token,
    }).then(() => true )
  )

  login = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.token,
      url: 'users/sign_in'
    }).then((json) => new UserModel(json))
  )

  register = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.token,
      url: 'users'
    }).then((json) => new UserModel(json))
  )
}

export default UsersService;
