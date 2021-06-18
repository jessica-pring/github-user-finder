import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false })
  }

  // // Alternative to axios using fetch

  // constructor() {
  //   super();
  //   this.state = {
  //     users: [],
  //     loading: false
  //   }

  //   const getData = async() => {
  //     this.setState({ loading: true });

  //     let res = await fetch(`https://api.github.com/users?
  //       client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //       client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //     let data = await res.json();
  //     return data;
  //   }

  //   getData().then((data) => {
  //     this.setState({ users: data, loading: false })
  //   })
  // }


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
