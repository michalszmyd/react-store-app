import React from 'react';
import LoginPopup from './LoginPopup';
import RegisterPopup from './RegisterPopup';

class AppPopups extends React.Component {
  state = {
    loginPopupEnabled: false,
    registerPopupEnabled: false
  }

  toggleLogin = () => {
    this.setState({
      loginPopupEnabled: !this.state.loginPopupEnabled
    })
  }

  toggleRegister = () => {
    this.setState({
      registerPopupEnabled: !this.state.registerPopupEnabled
    })
  }

  render () {
    const { loginPopupEnabled, registerPopupEnabled } = this.state;

    return (
      <div className="popups">
        { loginPopupEnabled ? <LoginPopup toggle={this.toggleLogin} /> : null }
        { registerPopupEnabled ? <RegisterPopup toggle={this.toggleRegister} /> : null }
      </div>
    )
  }
}

export default AppPopups;
