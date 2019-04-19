const DEFAULT_API_URL = '/api';

class ApiService {
  static get = (params) => {
    return fetch(`${DEFAULT_API_URL}/${params.url}`)
             .then((response) => {
               if (response.status >= 200 && response.status < 400) {
                 return response.json();
               } else {
                 throw response.json();
               }
             });
  }
}

export default ApiService;
