import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';
import MyComponent6 from './MyComponent6';

// 부모 컴포넌트
// function App() {
const App = () => { // ES6문법으로 정의한 함수
  // return <MyComponent />
  // return <MyComponent2 name="React" />
  // return <MyComponent3 name="React">리액트</MyComponent3>
  // return <MyComponent5 name="React" favoriteNumber={3}>리액트</MyComponent5>
     return <MyComponent6 name="React" favoriteNumber={8}>리액트</MyComponent6>
}

export default App;
