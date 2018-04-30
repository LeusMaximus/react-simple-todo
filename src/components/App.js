import React, { Component } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    newValue: '',
    todos: [],
  }

  handleAddTodo = e => {
    e.preventDefault();

    const newValue = this.state.newValue.trim();

    if (!newValue.length) return;

    const newTodo = {
      id: Date.now(),
      text: newValue,
      done: false
    };

    this.setState(prevState => {
      return {
        newValue: '',
        todos: [...prevState.todos, newTodo],
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

        <TodoList
          todos={todos}
          handleChangeTodoStatus={this.handleChangeTodoStatus}
          handleRemoveTodo={this.handleRemoveTodo}
        />
      </div>
    );
  }
}

export default App;
