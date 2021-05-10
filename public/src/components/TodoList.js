import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    /*if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }*/

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  const tasks = useSelector(state => state)
  console.log("hhhhhhh",tasks.task)
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm addTodo={addTodo() }/>
      <Todo todos={tasks}/>
      {/* <Todo
        todos={task.count}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      /> */}
    </>
  );
}

export default TodoList;
