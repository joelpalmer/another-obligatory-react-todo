import React, { Component } from "react";

import "../App.css";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    value: "",
    todos: []
  };

  handleClick = index => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      value: this.state.value,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, value: "" });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <List handleClick={this.handleClick} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
