import ApiService from './ApiService';

class UsersService {
  constructor (token) {
    this.token = token;
  }

  login = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.token,
      url: 'users/sign_in'
    })
  )

  register = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.token,
      url: 'users'
    })
  )
}

export default UsersService;
