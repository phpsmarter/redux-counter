export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';//这两个个常量起到的作用是，在redux中的标记，在reducer 中会用到
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
//以下是四个方法对应这个app界面中的四个按钮的操作，木偶组件中的按钮都不执行最终的state修改动作
//通过点击会发生如dispatch(increment),这样的函数分发过程，分发的函数最终和这里的action中的
//函数名相匹配，接下来在redux中会根据对应函数中的type类型去reducer里执行最终的State操作，如果是increment,
//就会根据type：INCREMENT_COUNTER去和reducer中的type想匹配，现在可以跳到reducer中
export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
};

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
};

export function incrementIfOdd() {
  return (dispatch, getState) => {
    var { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
};

export function incrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
};

export function decrementAsync(delay) {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(decrement());
    }, delay);
  };
};
