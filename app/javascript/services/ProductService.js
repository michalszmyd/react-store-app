import ApiService from './ApiService';
import ProductModel from '../models/ProductModel';

class ProductService {
  static find = (id) => {
    return ApiService.get({ url: `products/${id}` }).then((value) => new ProductModel(value))
  }

  static recent = () => {
    return ApiService.get({ url: 'products' })
             .then((json) => (
               json.map((value) => new ProductModel(value))
             ))
  }
}

export default ProductService;
