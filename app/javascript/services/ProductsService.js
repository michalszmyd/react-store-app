import ApiService from './ApiService';
import ProductModel from '../models/ProductModel';

class ProductsService {
  static find = (id) => {
    return ApiService.get({ url: `products/${id}` }).then((value) => new ProductModel(value))
  }

  static recent = () => {
    return ApiService.get({ url: `products?page=1&per=8` })
             .then((json) => (
               json.map((value) => new ProductModel(value))
             ))
  }

  static paginate = (page = 1) => {
    return ApiService.get({ url: `products?page=${page}` })
             .then((json) => (
               json.map((value) => new ProductModel(value))
             ))
  }

  static filter = ({ categoriesIds, page, query }) => {
    const categoriesParam = `&category_id[]=${categoriesIds.join('&category_id[]=')}`;
    const searchQuery = query ? `&query=${query}` : '';

    return ApiService.get({ url: `products?page=${page}${searchQuery}${categoriesParam}` })
             .then((json) => (
               json.map((value) => new ProductModel(value))
             ))
  }
}

export default ProductsService;
