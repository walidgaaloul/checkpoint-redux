import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine, RiCheckboxCircleLine} from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeState } from "../actions/Actions.js";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    task: '',
    isComplete:''
  });
  console.log('todo',todos)
  const submitUpdate = () => {
   // updateTodo(edit.id, task);
    setEdit({
      id: null,
      task: ''
    });
  };
  
  const task = useSelector(state => state.todoReducer)
  const filterTodosValue= useSelector((state) => state.filterReducer)
  console.log('useselector',filterTodosValue)
  const dispatch = useDispatch();

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
  edit.id=''
}
let filtred=''
console.log('resultat filter ', filtred=[...todos.filter(tdo => tdo.isComplete ==false )  ])
filterTodosValue[0]=="" ? filtred=todos : filtred=[...todos.filter(tdo => tdo.isComplete ==filterTodosValue.filterTodo )  ]
//console.log('resultat filter ', filtred)

  return filtred.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.task}
      </div>
      <div className='icons'>
        <RiCheckboxCircleLine onClick={() => dispatch(changeState(todo))}
          className='delete-icon'
        />
        <RiCloseCircleLine
          onClick={() => dispatch(deleteTask(todo))}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, task: todo.task , isComplete:true})}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
