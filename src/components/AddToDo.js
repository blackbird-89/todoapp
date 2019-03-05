import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    title: ""
  };

  //this now is component's level state value wil be whatever we type in
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //  we need to pass this up just like
  //we did with delete and makecompleted
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    //later we set the value to nothing/empty
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
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
