import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    //console.log(this.props.todos);
    //Here we can access props which we passed from the state in App
    //and when we map through our todos(array) we want to add components
    //which are todoitems
    //so while mapping through every todo we pass it as a prop to Todoitem
    return this.props.todos.map((todo) => (
      <TodoItem todo={todo}/>
    ))
  }
}

export default Todos;
