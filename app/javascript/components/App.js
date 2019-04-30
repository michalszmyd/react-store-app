import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from '../reducers/user-reducer';
import csrfTokenReducer from '../reducers/csrf-token-reducer';

import Main from './Main';

import UserModel from '../models/UserModel';

const reducers = combineReducers({
  user: userReducer,
  csrfToken: csrfTokenReducer
})

const store = createStore(reducers);

class App extends React.Component {
  constructor (props) {
    super(props);

    window.store = store;

    if (this.props.currentUser) {
      const user = new UserModel(this.props.currentUser);

      store.dispatch({
        type: 'updateUser',
        payload: {
          user: user
        }
      });
    }

    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
    store.dispatch({
      type: 'updateCsrfToken',
      payload: {
        csrfToken: csrfToken
      }
    })
  }

  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;
