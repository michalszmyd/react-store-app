import ApiService from './ApiService';
import ProductModel from '../models/ProductModel';

class ProductService {
  recent = () => {
    return ApiService.get({ url: 'products' }).then((json) => (
      json.map((value) => new ProductModel(value))
    ))
  }
}

export default ProductService;
