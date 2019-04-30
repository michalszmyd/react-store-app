import React from 'react';
import Alert from './Alert';

class Alerts extends React.Component {
  state = {
    alerts: []
  }

  push = (alert) => {
    alert.id = this.generateId();

    this.setState({
      alerts: this.state.alerts.concat([alert])
    }, () => {
      setTimeout(() => {
        this.destroy(alert.id);
      }, 3500)
    })
  }

  destroy = (id) => {
    let alerts = this.state.alerts.filter((a) => a.id !== id);

    this.setState({ alerts: alerts })
  }

  generateId = () => (
    parseInt(Math.random() * Math.random() * 100)
  )

  render () {
    const alerts = this.state.alerts;

    return (
      <div className="alerts">
        { alerts.map((alert) => (
          <Alert key={alert.id} {...alert} destroy={this.destroy} />
        )) }
      </div>
    )
  }
}

export default Alerts;
