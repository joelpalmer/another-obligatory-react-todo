import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.props.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
