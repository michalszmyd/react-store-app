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
      this.setState({ products: products });
      window.addEventListener('scroll', this.onScroll, false);
      this.ableToLoadNextPage = products.length > 0;
    });

    CategoriesService.all().then((categories) => {
      this.setState({ categories: categories });
    });
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = (e) => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.ableToLoadNextPage) {
      this.ableToLoadNextPage = false;
      this.page += 1;

      ProductsService.filter({
        categoriesIds: this.filteredCategoriesIds,
        query: this.filterValue,
        page: this.page
      }).then((products) => {
        if (products.length > 0) {
          this.ableToLoadNextPage = true;
          this.setState({ products: this.state.products.concat(products) })
        }
      })
    }
  }

  addFilterCategoryId = (id) => {
    this.page = 1;
    this.filteredCategoriesIds.push(id);

    ProductsService.filter({
      categoriesIds: this.filteredCategoriesIds,
      query: this.filterValue,
      page: 1
    }).then((products) => {
      this.setState({ products: products });
      this.ableToLoadNextPage = true;
    })
  }

  removeFilterCategoryId = (id) => {
    this.page = 1;
    this.filteredCategoriesIds = this.filteredCategoriesIds.filter((categoryId) => (
      categoryId !== id
    ));

    ProductsService.filter({
      categoriesIds: this.filteredCategoriesIds,
      page: 1,
      query: this.filterValue
    }).then((products) => {
      this.setState({ products: products });
      this.ableToLoadNextPage = true;
    })
  }

  onSearchChange = (e) => {
    this.queryFilterChangedAt = new Date();
    this.filterValue = e.target.value;

    setTimeout(() => {
      if (new Date() - this.queryFilterChangedAt >= 500) {
        ProductsService.filter({
          categoriesIds: this.filteredCategoriesIds,
          page: 1,
          query: this.filterValue
        }).then((products) => {
          this.setState({ products: products });
          this.ableToLoadNextPage = true;
          this.page = 1;
        })
      }
    }, 500);
  }

  render () {
    const { products, categories } = this.state;

    return (
      <div className="products">
        <div className="products-categories container">
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
        <div className="container">
          <div className="search-bar row">
            <div className="container">
              <input
                id="search"
                type="text"
                name="search"
                className="form-control"
                placeholder="Type to search"
                onChange={this.onSearchChange}
              />
            </div>
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
