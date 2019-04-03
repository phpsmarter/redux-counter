import { combineReducers } from 'redux';
import counter from './counter';//本例子中的执行计数器state操作的reducer文件
//可以把较复杂的reducer放到不同的文件中，然后通过combineReducers合成一个redcer,
const rootReducer = combineReducers({
  counter
});

export default rootReducer;
