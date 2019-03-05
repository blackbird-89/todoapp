import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddToDo";
import About from "./components/pages/About";
import uuid from "uuid"; //generates ids

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Read a book",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Make dinner",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Wash clothes",
        completed: false
      }
    ]
  };

  //here we change the state for this particular one
  //that is why we need id
  markCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed; //simply toggling
        }
        return todo;
      })
    });
  };

  //we pass in into setstate our state object which is todos
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    //Here we assign props from the state to Todos(as an attribute)
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markCompleted={this.markCompleted}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}/>
              <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
