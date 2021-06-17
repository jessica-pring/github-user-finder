import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';

// Render Users component
//    UserItems rendered within Users


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title='GitHub User Finder' icon='fab fa-github' />

        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
