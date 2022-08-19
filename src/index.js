// Store : 데이터(state)를 저장하는곳
import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// 리듀서는 [데이터를 수정하는] 함수! 중요! 스토어를 만들면 리듀서도 만들어야한다!
// (state=0) : state initializing
const countModifier = (count = 0, action) => {
  console.log('🚀 ~ count, action', count, action);
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count; // reducer가 리턴하는 모든것은 data!
  }
};

const countStore = createStore(countModifier);

// store.dispatch({key:value}) : countModifier(리듀서)에게 action을 보내는 방법 | <key:value> => action
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });

// console.log(countStore.getState());
// ReactDOM.render(<App />, document.getElementById('root'));

console.log(countStore.getState());
