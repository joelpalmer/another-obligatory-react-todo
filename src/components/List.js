import React, { Component } from "react";
import Task from "./Task";
export default class List extends Component {
 
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo, index) => {
          return <Task key={index} todo={todo} index={index} handleClick={this.props.handleClick} />;
        })}
      </div>
    );
  }
}
