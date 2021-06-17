import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import axios from 'axios';

const url = "https://api.github.com/users";

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(url);
    this.setState({ users: res.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar title='GitHub User Finder' icon='fab fa-github' />

        <div className="container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default App;
