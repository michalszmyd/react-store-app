import ApiService from './ApiService';
import CategoryModel from '../models/CategoryModel';

class CategoriesService {
  static all = () => {
    return ApiService.get({ url: '/categories' })
      .then((json) => json.map((value) => new CategoryModel(value)))
  }
}

export default CategoriesService;
