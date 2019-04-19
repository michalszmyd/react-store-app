import React from 'react';
import Home from './home/Home';

class App extends React.Component {
  render () {
    return (
      <div className="application">
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Store</a>
        </nav>
        <div>
          <Home />
        </div>
      </div>
    )
  }
}

export default App;
