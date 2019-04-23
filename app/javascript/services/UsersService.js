import ApiService from './ApiService';
import UserModel from '../models/UserModel';

class UsersService {
  constructor (token) {
    this.token = token;
  }

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
