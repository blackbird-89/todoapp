import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
 
  render() {
    //console.log(this.props.todos);
    //Here we can access props which we passed from the state in App
    //and when we map through our todos(array) we want to add components
    //which are todoitems
    //so while mapping through every todo we pass it as a prop to Todoitem
    return this.props.todos.map((todo) => (
      <TodoItem  key={todo.id} todo={todo} markCompleted={this.props.markCompleted}/>
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
