import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Read a book",
        completed: false
      },
      {
        id: 2,
        title: "Make dinner",
        completed: false
      },
      {
        id: 3,
        title: "Wash clothes",
        completed: false
      }
    ]
  }


  //here we change the state for this particular one 
  //that is why we need id
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed //simply toggling
        }
        return todo;
      })
    });
  }

//we pass in into setstate our state object which is todos
  deleteTodo = (id) => { 
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render() {
    //Here we assign props from the state to Todos(as an attribute)
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
