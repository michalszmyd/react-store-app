import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';
import CartHeader from '../cart/CartHeader';

class Navigation extends React.Component {
  render () {
    const user = this.props.user;

    return (
      <React.Fragment>
        <Link className="navbar-brand" to="/">Store</Link>
        { !user.id ?
          <React.Fragment>
            <li className="nav-item login-action" onClick={this.props.toggleLogin}>
              <span className="nav-link">Login</span>
            </li>
            <li className="nav-item login-action" onClick={this.props.toggleRegister}>
              <span className="nav-link">Register</span>
            </li>
          </React.Fragment> :
          <React.Fragment>
            <li className="nav-item"><span className="nav-link" href="#">{user.email}</span></li>
          </React.Fragment>
        }
        <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navigation);
