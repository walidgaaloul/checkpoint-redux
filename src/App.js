import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./actions/Actions";
import { DECREMENT, INCREMENT, RESET } from "./actions/types";
import { useState } from 'react';
const App = () => {
  const [step, setStep] = useState(1)
  // const counter = useSelector((state) => state.Reducer);
  const counter = useSelector(state => state)


  const dispatch = useDispatch();
  return (

    <div className='todo-app'>
      <TodoList />
    </div>


    
    // <div>
    
    //   <button onClick={() => dispatch(increment(step))}>+</button>
    //   <h1>{counter.count}</h1>
    //   <button onClick={() => dispatch(decrement(step))}>-</button>
    //   <button onClick={() => dispatch(reset())}>reset</button>
    //   <div>
    //     <input type="number" value={step} onChange={(e) => setStep(+e.target.value)}></input>
    //   </div>
    // </div>
  );
};

export default App;
