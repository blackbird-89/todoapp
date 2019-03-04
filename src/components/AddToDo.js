import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          style={{ flex: "10", padding: "5px" }}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddToDo;
