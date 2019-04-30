import ApiService from './ApiService';

class AuthenticateService {
  static csrfToken = () => {
    return ApiService.get({ url: 'csrf_token' })
      .then((json) => json.csrf_token)
  }
}

export default AuthenticateService;
