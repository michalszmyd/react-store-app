import React from 'react';
import UsersService from '../../services/UsersService';
import { X } from 'react-feather';

class RegisterPopup extends React.Component {
  constructor (props) {
    super(props);

    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    this.usersService = new UsersService(csrfToken);
  }
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    formSubmitted: false,
    errors: null
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formSubmitted: true
    })

    this.usersService
      .register(this.state)
      .then(() => this.props.toggle())
      .catch((data) => {
        data.then((value) => {
          this.setState({
            errors: value.errors,
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

  errorFor = (name) => {
    const errors = this.state.errors;

    if (errors && errors[name]) {
      return (
        <p className="error">{errors[name].join(', ')}</p>
      )
    }
  }

  render () {
    const { email, password, formSubmitted, errors } = this.state;

    return (
      <div className="popup">
        <form method="post" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-10">
              <p>Register</p>
            </div>
            <div className="col-md-2 text-right close-popup">
              <span onClick={this.props.toggle}>
                <X />
              </span>
            </div>
          </div>
          <div className="form-group">
            { this.errorFor('email') }
            <input disabled={formSubmitted} onChange={this.onChange} type="email" name="email" placeholder="email" className="form-control" />
          </div>
          <div className="form-group">
            { this.errorFor('password') }
            <input disabled={formSubmitted} onChange={this.onChange} type="password" name="password" placeholder="password" className="form-control" />
          </div>
          <div className="form-group">
            { this.errorFor('password_confirmation') }
            <input disabled={formSubmitted} onChange={this.onChange} type="password" name="password_confirmation" placeholder="password confirmation" className="form-control" />
          </div>
          <div className="form-group">
            { formSubmitted ?
              <div className="btn-sm btn btn-default">Loading...</div> :
                <input type="submit" value="Create account" className="btn-sm btn btn-default" />
            }
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterPopup;
