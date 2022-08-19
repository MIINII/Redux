# ㊙️ Vanilla Redux

### <span style="color:#63a6ff">Data를 관리하는걸 도와주는 역할을 하는 우리의 리덕스</span>

## 01. 스토어와 리듀서

> - Store : 데이터(state)를 저장하는곳!
> - Reducer : **[데이터를 수정하는] 함수!** 중요! 스토어를 만들면 리듀서도 만들어야한다!
> - State : 변경이 필요한 Data

```jsx
// 리듀서나 모디파이어는 처음으로 데이터를 바꿔준당!
// state initializing
const reducer = (state = 0) => {
  return 'hello'; // 👈 application data가 된다
};

const Store = createStore(reducer);
```

∴ 뭐든지 *modifier/reducer*가 `return` 하는것은 **application에 있는 data다**!!!!!!

### 액션(Action)

> redux에서 function을 부를때 쓰는 두번쨰 파라미터/아규먼트

`store.dispatch({key:value})` : countModifier **(리듀서)** 에게 **(action)** 을 보내는 방법 | <key:value> => action countStore.dispatch({ type: 'ADD' });
