import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className="header">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Log in</li>
        </ul>
        <div className="body container">
          App
        </div>
      </div>
    )
  }
}

export default App;
