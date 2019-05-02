import React from 'react';
import ProductPreview from './ProductPreview';
import CategoryPill from '../categories/CategoryPill';
import ProductsService from '../../services/ProductsService';
import CategoriesService from '../../services/CategoriesService';

class Products extends React.Component {
  constructor (props) {
    super(props);

    this.filteredCategoriesIds = [];
    this.page = 1;
  }

  state = {
    products: [],
    categories: []
  }

  componentDidMount () {
    ProductsService.paginate().then((products) => {
      this.setState({
        products: products
      })
    })

    CategoriesService.all().then((categories) => {
      this.setState({
        categories: categories
      })
    })
  }

  addFilterCategoryId = (id) => {
    this.filteredCategoriesIds.push(id);

    ProductsService.filter({
      categoriesIds: this.filteredCategoriesIds,
      page: this.page
    }).then((products) => {
      this.setState({ products: products })
    })
  }

  removeFilterCategoryId = (id) => {
    this.filteredCategoriesIds = this.filteredCategoriesIds.filter((categoryId) => (
      categoryId !== id
    ));

    ProductsService.filter({
      categoriesIds: this.filteredCategoriesIds,
      page: this.page
    }).then((products) => {
      this.setState({ products: products })
    })
  }

  render () {
    const { products, categories } = this.state;

    return (
      <div className="products">
        <div className="products-categories container">
          <div>
            <h4><p>Filter by category</p></h4>
            { categories.map((category) => (
              <CategoryPill
                category={category}
                key={category.id}
                removeFilterCategoryId={this.removeFilterCategoryId}
                addFilterCategoryId={this.addFilterCategoryId}
                />
            )) }
          </div>
        </div>
        <div className="products-board container">
          <div className="row">
            { products.map((product) => (
              <ProductPreview key={product.id} product={product} />
            )) }
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
