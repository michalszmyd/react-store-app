import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home/Home';
import Product from './products/Product';
import AppPopups from './popups/AppPopups';
import Navigation from './header/Navigation';
import CartHeader from './cart/CartHeader';

class Main extends React.Component {
  toggleLogin = () => this.appPopups.toggleLogin();

  toggleRegister = () => this.appPopups.toggleRegister();

  addProductToCart = (item) => {
    if (this.cartHeader) {
      return this.cartHeader.addProduct(item);
    } else {
      return this.toggleLogin();
    }
  }

  render () {
    const user = this.props.user;

    return (
      <Router>
        <AppPopups ref={(appPopups) => this.appPopups = appPopups}/>
        <div className="application">
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Navigation toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister} />
            { user.id ? <CartHeader ref={(cartHeader) => this.cartHeader = cartHeader} /> : null }
          </nav>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" render={(props) => <Product {...props} addProductToCart={this.addProductToCart} />} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Main);
