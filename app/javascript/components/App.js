import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home/Home';
import Product from './products/Product';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="application">
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Store</Link>
          </nav>
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/products/:id" component={Product} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
