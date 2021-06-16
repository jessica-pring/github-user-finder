import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from './components/users/UserItem';

// Render Users component
//    UserItems rendered within Users


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title='GitHub User Finder' icon='fab fa-github' />

        <UserItem />
      </div>
    );
  }
}

export default App;
