import { applyMiddleware, compose, createStore } from 'redux';

//import {persistStore, autoRehydrate} from 'redux-persist';//添加redux持久化组件
//import {AsyncStorage} from 'react-native'
import devTools from 'remote-redux-devtools';
import logger from 'redux-logger'
import reducer from '../reducers';
import thunk from 'redux-thunk';

//先注意createStore
//异步操作的组件，可以暂时不管


//这个方法就是把state注入到store中
export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk,logger),
      devTools()
    )
  );

  // if (module.hot) {
  //   // Enable hot module replacement for reducers
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('../reducers/index').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  //
   return store;
};
