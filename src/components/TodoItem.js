import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBttom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }




  render() {
    const { id, title} = this.props.todo; //so we dont have to write long all the time
    //later we bind both this and what we want to save in variable const
    return (
      <div style={this.getStyle()}>
        <p>
      
          <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} />{' '}
          {title}</p>
      </div>
    )
  }
}


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
