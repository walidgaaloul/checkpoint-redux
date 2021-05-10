
import React, { useState, useEffect, useRef } from 'react';
import { RiFilter2Line, RiCheckboxCircleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { add, updateTask } from "../actions/Actions.js";

import { filterTodo } from "../actions/Actions.js";
function TodoForm(props) {

  const dispatch = useDispatch();
  const [newTask, setNewtask] = useState(props.edit ? props.edit.task : '');
  //  const task = props.edit ? props.edit.task : ''
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




  const filterTodos = useSelector(state => state.filterReducer)

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
        <>
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
           
          {/* <button className='todo-button' onClick={() => dispatch(filterTodo(true))}>
            filter           </button> 
          
            <div className="dropdown">
      <div className="dropdown__select">
        <span className="dropdown__selected"><RiFilter2Line onClick='#'
          className='delete-icon'
        /></span>
        <i class="fa fa-caret-down dropdown__caret"></i>
      </div>
      <ul class="dropdown__list">

        
        <li class="dropdown__item">
        <RiCheckboxCircleLine onClick={() => dispatch(filterTodo(''))}
          className='delete-icon'
        />
          <i class="fa fa-plus-circle dropdown__icon"></i>
        </li>
        
        <li class="dropdown__item">
        <RiCheckboxCircleLine onClick={() => dispatch(filterTodo(true))}
          className='delete-icon'
        />
          <i class="fa fa-plus-circle dropdown__icon"></i>
        </li>


         <li class="dropdown__item">
        <RiCheckboxCircleLine onClick={() => dispatch(filterTodo(false))}
          className='delete-icon'
        />
          <i class="fa fa-plus-circle dropdown__icon"></i>
        </li>

{/*         
        <li class="dropdown__item">
          <span class="dropdown__text">Logout</span>
          <i class="fa fa-circle dropdown__icon"></i>
        </li> 
      </ul>
    </div>  */}
        </>
      )}

    </div>
  );
}

export default TodoForm;
