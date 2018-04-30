import React from 'react';

const TodoItem = ({todo, handleChangeTodoStatus, handleRemoveTodo}) => (
  <React.Fragment>
    <span onClick={handleChangeTodoStatus(todo.id)}>
      {todo.done ? <s>{todo.text}</s> : todo.text}
    </span>

    <button type="button" onClick={handleRemoveTodo(todo.id)}>
      &times;
    </button>
  </React.Fragment>
);

export default TodoItem;
