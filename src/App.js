import './App.css';
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  // Defines the state of the component
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  // Async function to read API data and save to this state's users
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users?
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data, loading: false });
  }

  // Function to search API with a search query
  searchUsers = async (text) => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  }

  // Get single github user
  getUser = async (login) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/user/${login}?&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  }

  // Get single github user's repos
  getUserRepos = async (login) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/user/${login}/repos?per_page=5&sort=created:asc&
      client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
      client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ repos: res.data, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    // Alert disappears after 5 seconds
    setTimeout(() => this.setState({ alert: null }), 5000);
  }

  // Renders the app
  render() {
    // destructuring
    const { users, user, repos, loading } = this.state;

    return (
      <Router basename='/github-user-finder' >
        <div className="App">
          <Navbar title='GitHub User Finder' icon='fab fa-github' />

          <div className="container">
            < Alert alert={this.state.alert} />

            <Switch>
              {/* Home */}
              <Route exact path='/' render={props => (
                <Fragment>
                  {/* Props being passed up from search query // prop drilling */}
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={ users.length > 0 ? true : false }
                    setAlert={this.setAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}/>

              {/* User page */}
              <Route exact path='/user/:login' render={props => (
                <User 
                  { ...props } 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos} 
                  user={user} 
                  repos={repos}
                  loading={loading} 
                />
              )}/>

              {/* About */}
              <Route exact path='/about' component={About} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
