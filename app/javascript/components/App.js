import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from '../reducers/user-reducer';

import Home from './home/Home';
import Product from './products/Product';
import AppPopups from './popups/AppPopups';
import Navigation from './header/Navigation';

import UserModel from '../models/UserModel';

const reducers = combineReducers({
  user: userReducer
})

const store = createStore(reducers);

class App extends React.Component {
  constructor (props) {
    super(props);

    if (this.props.currentUser) {
      const user = new UserModel(this.props.currentUser);

      store.dispatch({
        type: 'updateUser',
        payload: {
          user: user
        }
      });
    }
  }

  toggleLogin = () => this.appPopups.toggleLogin();

  toggleRegister = () => this.appPopups.toggleRegister();

  render () {
    return (
      <Provider store={store}>
        <Router>
          <AppPopups ref={(appPopups) => this.appPopups = appPopups}/>
          <div className="application">
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
            <Navigation toggleLogin={this.toggleLogin} toggleRegister={this.toggleRegister} />
            <div className="container">
              <Route path="/" exact component={Home} />
              <Route path="/products/:id" component={Product} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
