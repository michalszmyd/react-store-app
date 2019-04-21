import React from 'react';
import UsersService from '../../services/UsersService';
import { X } from 'react-feather';

class LoginPopup extends React.Component {
  constructor (props) {
    super(props);

    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    this.usersService = new UsersService(csrfToken);
  }
  state = {
    email: '',
    password: '',
    formSubmitted: false,
    error: null
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
      error: null
    })

    this.usersService
      .login(this.state)
      .then(() => this.props.toggle())
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

export default LoginPopup;
