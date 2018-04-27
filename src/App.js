import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple React TODO</h1>

        <form>
          <input type="text" />
          <button type="submit">Add</button>
        </form>

        <ul>
          <li>
            <span>First todo</span>
            <button type="button">&times;</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
