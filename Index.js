'use strict';

import React, { Component } from 'react';

import Counter from './src/containers/Counter';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();   

class Entry extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}

export default Entry;
