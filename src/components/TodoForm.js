
import React, { useState, useEffect, useRef } from 'react';

import { useDispatch } from "react-redux";
import { add, updateTask } from "../actions/Actions.js";

import { filterTodo } from "../actions/Actions.js";
function TodoForm(props) {

  const dispatch = useDispatch();
  const [newTask, setNewtask] = useState(props.edit ? props.edit.task : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setNewtask(e.target.value);
  };

  const handleSubmit = e => {

    if (!newTask || /^\s*$/.test(newTask)) {
      return;
    }
    e.preventDefault();

    dispatch(add(newTask));
    setNewtask('')
  };

  const handleUpdate = e => {
    if (!newTask || /^\s*$/.test(newTask)) {
      return;
    }
    e.preventDefault();
    setNewtask(props.edit.task = newTask)
    dispatch(updateTask(props.edit)) && props.onSubmit()
    setNewtask('')
  };


  return (

    <div className='todo-form'>

      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={newTask}
            onChange={handleChange}
            name='text'
            ref={inputRef}

            className='todo-input edit'
          />
          <button onClick={handleUpdate} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <div className="formfilter">
          <input
            placeholder='Add a todo'
            value={newTask}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input'

          />
          <button className='todo-button' onClick={handleSubmit}>
            Add tod
           </button>
           <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">Filter</span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item" onClick={() => dispatch(filterTodo(''))}>
          <span class="dropdown__text"  >All</span>        
        </li>
        <li class="dropdown__item" onClick={() => dispatch(filterTodo(true))}>
          <span class="dropdown__text" >Done</span>
        </li>
        <li class="dropdown__item" onClick={() => dispatch(filterTodo(false))}>
          <span class="dropdown__text" >Not</span>
        </li>

      </ul>
    </div>

        </div>
        
      )}

    </div>
  );
}

export default TodoForm;
