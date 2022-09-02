import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import App from '../public/App';
// react-dom이라는 패키지에서 디폴트로 익스포트하는 객체를 ReactDOM이라는 이름으로 임포트해서 이 객체의 render라는 메소드 실행
// render메소드로 HTML태그를 만들어줌
// render메소드가 실행되면 리액트는 첫번쨰 아규먼트값을 바탕으로 새로운 html요소를 만들고, 그 요소를 두번쨰 아규먼트 값에다 집어넣는 방식으로 진행
// const root = ReactDOM.createRoot(<App />, document.getElementById('root')); // JSX문법
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// ); // JSX문법

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);

// reportWebVitals();
// 함수이름을 가진 태그를 만들수 있따.
export default App