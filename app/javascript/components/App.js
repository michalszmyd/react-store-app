import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from '../reducers/user-reducer';

import Main from './Main';

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

  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App;
