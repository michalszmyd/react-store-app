import React from 'react';
import { X } from 'react-feather';

const typeColors = {
  error: '#FF876E',
  success: '#54E896',
  warning: '#FFDB51'
}

class Alert extends React.Component {
  destroy = () => this.props.destroy(this.props.id);

  render () {
    const { message, type } = this.props;

    return (
      <div className="alert" style={{ backgroundColor: typeColors[type] }}>
        <div className="text-right alert-close" onClick={this.destroy}>
          <X height="20" width="20" />
        </div>
        <p>{message}</p>
      </div>
    )
  }
}

export default Alert;
