import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {
        id: Date.now(),
        text: 'Learn React',
        done: false
      }
    ],
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Simple React TODO</h1>

        <form>
          <input type="text" />
          <button type="submit">Add</button>
        </form>

        <ul>
          {todos.map(todo => (
            <li>
              <span>
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
