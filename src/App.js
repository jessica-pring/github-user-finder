import './App.css';
import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class App extends Component {
  // Defines the state of the component
  state = {
    users: [],
    loading: false
  }

  // Async function to read API data and save to this state's users
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false })
  }

  // Function to search API for a specific user
  searchUsers = async (text) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });


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


  // Renders the app
  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar title='GitHub User Finder' icon='fab fa-github' />

        <div className="container">
          {/* Props being passed up from search query */}
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={ users.length > 0 ? true : false }
          />
          <Users users={users} loading={loading} />
        </div>
      </div>
    );
  }
}

export default App;
