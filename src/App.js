import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title='Nav' icon='fab fa-github' />

        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
