import React, { Component } from 'react';

import TodoInput from './TodoInput';

class App extends Component {
  state = {
    newValue: '',
    todos: [],
  }

  handleAddTodo = e => {
    e.preventDefault();

    this.setState(prevState => {
      const isEmptyValue = prevState.newValue.trim() === '';

      if (isEmptyValue) return prevState;

      return {
        newValue: '',
        todos: [
          ...prevState.todos,
          {
            id: Date.now(),
            text: prevState.newValue,
            done: false
          }
        ],
      };
    });
  }

  handleNewValue = e => {
    const value = e.currentTarget.value;

    this.setState({
        newValue: value
    });
  }

  handleChangeTodoStatus = id => e => {
    this.setState(prevState => (
      {
        todos: prevState.todos.map(todo => todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
        ),
      }
    ));
  }

  handleRemoveTodo = id => e => {
    this.setState(prevState => (
      {
        todos: prevState.todos.filter(todo => todo.id !== id),
      }
    ))
  }

  render() {
    const { todos, newValue } = this.state;

    return (
      <div>
        <h1>Simple React TODO</h1>

        <TodoInput
          onSubmit={this.handleAddTodo}
          onChange={this.handleNewValue}
          value={newValue}
        />

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span onClick={this.handleChangeTodoStatus(todo.id)}>
                {todo.done ? <s>{todo.text}</s> : todo.text}
              </span>

              <button type="button" onClick={this.handleRemoveTodo(todo.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
