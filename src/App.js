import React from 'react';

import './App.css';
import allActions from './actions'

import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state.counter);
  console.log(counter)
  const color = useSelector(state => state.color)
  console.log(color)


  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter : {counter}</h1>
        <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
        <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>

        <h1>Color : {color}</h1>

        <button onClick={() => dispatch(allActions.colorActions.red())}>change to red color</button>
        <button onClick={() => dispatch(allActions.colorActions.yellow())}>change to yellow color</button>
      </header>
    </div>
  );
}

export default App;
