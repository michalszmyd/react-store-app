import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './home/Home';
import Product from './products/Product';
import Products from './products/Products';
import AppPopups from './popups/AppPopups';
import Alerts from './alerts/Alerts';
import Navigation from './header/Navigation';
import CartHeader from './cart/CartHeader';
import Footer from './Footer';

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

  renderProduct = (props) => (
    <Product {...props} addProductToCart={this.addProductToCart} />
  )

  pushAlert = (alert) => {
    this.alerts.push(alert);
  }

  render () {
    const { csrfToken, user } = this.props;

    return (
      <Router>
        <AppPopups ref={(appPopups) => this.appPopups = appPopups}/>
        <Alerts ref={(alerts) => this.alerts = alerts} />
        <div className="application">
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <Navigation toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister} />
                { user.id ?
                  <CartHeader
                    pushAlert={this.pushAlert}
                    csrfToken={csrfToken}
                    ref={(cartHeader) => this.cartHeader = cartHeader} />
                  : null }
              </ul>
            </div>
          </nav>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" render={this.renderProduct} />
            <Route path="/products" exact component={Products} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  csrfToken: state.csrfToken
});

export default connect(mapStateToProps)(Main);
