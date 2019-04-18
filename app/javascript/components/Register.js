import React from 'react';
import PropTypes from 'prop-types';

class Register extends React.Component {
  render () {
    return (
      <form>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input type="text" name="password_confirmation" placeholder="password_confirmation" />
        <input type="submit" value="Register" />
      </form>
    )
  }
}

export default Register;
