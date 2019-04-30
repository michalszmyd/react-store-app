import React from 'react';
import UsersService from '../../services/UsersService';
import AuthenticateService from '../../services/AuthenticateService';
import { connect } from 'react-redux'
import { updateUser } from '../../actions/user-actions';
import { updateCsrfToken } from '../../actions/authenticate-actions';
import { X } from 'react-feather';

class LoginPopup extends React.Component {
  state = {
    email: '',
    password: '',
    formSubmitted: false,
    error: null
  }

  onSubmit = (e) => {
    e.preventDefault();

    const usersService = new UsersService(this.props.csrfToken);

    this.setState({
      formSubmitted: true,
      error: null
    })

    usersService
      .login(this.state)
      .then((user) => {
        AuthenticateService.csrfToken().then((token) => {
          this.props.updateCsrfToken(token);
          this.props.toggle();
          this.props.updateUser(user);
        });
      })
      .catch((data) => {
        data.then((value) => {
          this.setState({
            error: value.error,
            formSubmitted: false
          })
        })
      });
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render () {
    const { email, password, formSubmitted, error } = this.state;

    return (
      <div className="popup">
        <form method="post" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-10">
              <h5>Log in</h5>
              <p className="error">{error}</p>
            </div>
            <div className="col-md-2 text-right close-popup">
              <span onClick={this.props.toggle}>
                <X />
              </span>
            </div>
          </div>
          <div className="form-group">
            <input disabled={formSubmitted} value={email} onChange={this.onChange} type="email" name="email" placeholder="email" className="form-control" />
          </div>
          <div className="form-group">
            <input disabled={formSubmitted} value={password} onChange={this.onChange} type="password" name="password" placeholder="password" className="form-control" />
          </div>
          <div className="form-group">
            { formSubmitted ?
              <div className="btn-sm btn btn-default">Loading...</div> :
                <input type="submit" value="Log in" className="btn-sm btn btn-default" />
            }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  csrfToken: state.csrfToken
});

const mapDispatchToProps = {
  updateUser: updateUser,
  updateCsrfToken: updateCsrfToken
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
