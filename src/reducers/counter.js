import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
//import {REHYDRATE} from 'redux-persist/constants';
export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:  //当aciton中的对应的action type名，如INCREMENT_COUNTER和这里的想匹配时
  //就执行相应的state操作 state加1
    return state + 1;
  case DECREMENT_COUNTER:  //state减一
    return state - 1;
  default:
    return state;
  }
};
