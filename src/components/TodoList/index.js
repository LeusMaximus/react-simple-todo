import React from 'react';

import TodoItem from '../TodoItem';

const TodoList = ({todos, handleChangeTodoStatus, handleRemoveTodo}) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoItem
          todo={todo}
          handleChangeTodoStatus={handleChangeTodoStatus}
          handleRemoveTodo={handleRemoveTodo}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
