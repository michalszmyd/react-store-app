import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navigation extends React.Component {
  render () {
    const user = this.props.user;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Store</Link>
        { Object.keys(user).length === 0 ?
          <React.Fragment>
            <div className="login-action" onClick={this.props.toggleLogin}>Login</div>
            <div className="login-action" onClick={this.props.toggleRegister}>Register</div>
          </React.Fragment> :
          <div>{user.email}</div>
        }
      </nav>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navigation);
