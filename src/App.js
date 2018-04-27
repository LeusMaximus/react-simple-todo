import React, { Component } from 'react';

class App extends Component {
  state = {
    newValue: '',
    todos: [
      {
        id: Date.now(),
        text: 'Learn React',
        done: false
      }
    ],
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

  render() {
    const { todos, newValue } = this.state;

    return (
      <div>
        <h1>Simple React TODO</h1>

        <form onSubmit={this.handleAddTodo}>
          <input type="text" value={newValue} onChange={this.handleNewValue} />
          <button type="submit">Add</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span onClick={this.handleChangeTodoStatus(todo.id)}>
                {todo.done ? <s>{todo.text}</s> : todo.text}
              </span>

              <button type="button">&times;</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
