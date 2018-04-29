import React from 'react';

const TodoList = ({todos, handleChangeTodoStatus, handleRemoveTodo}) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <span onClick={handleChangeTodoStatus(todo.id)}>
          {todo.done ? <s>{todo.text}</s> : todo.text}
        </span>

        <button type="button" onClick={handleRemoveTodo(todo.id)}>
          &times;
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
