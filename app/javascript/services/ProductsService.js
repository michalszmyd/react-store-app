import ApiService from './ApiService';
import ProductModel from '../models/ProductModel';

class ProductsService {
  static find = (id) => {
    return ApiService.get({ url: `products/${id}` }).then((value) => new ProductModel(value))
  }

  static recent = () => {
    return ApiService.get({ url: 'products' })
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

  static filter = ({ categoriesIds, page }) => {
    const categoriesParam = `&category_id[]=${categoriesIds.join('&category_id[]=')}`;

    return ApiService.get({ url: `products?page=${page}${categoriesParam}` })
             .then((json) => (
               json.map((value) => new ProductModel(value))
             ))
  }
}

export default ProductsService;
