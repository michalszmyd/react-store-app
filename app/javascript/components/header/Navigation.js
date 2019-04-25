import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CartHeader from '../cart/CartHeader';

class Navigation extends React.Component {
  render () {
    const user = this.props.user;

    return (
      <React.Fragment>
        <Link className="navbar-brand" to="/">Store</Link>
        { !user.id ?
          <React.Fragment>
            <div className="login-action" onClick={this.props.toggleLogin}>Login</div>
            <div className="login-action" onClick={this.props.toggleRegister}>Register</div>
          </React.Fragment> :
          <React.Fragment>
            <div>{user.email}</div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navigation);
