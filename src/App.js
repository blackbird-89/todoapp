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
  render() {
    //Here we assign props from the state to Todos(as an attribute)
   // console.log(this.state.todos)
    return (
      <div className="App">
      <Todos todos={this.state.todos}/>       
      </div>
    );
  }
}

export default App;
