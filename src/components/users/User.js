import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
  // Passes the user state to User component
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  
  render() {
    const { 
      name,
      // avatar_url,
      // location,
      // bio,
      // blog,
      // login,
      // html_url,
      // followers,
      // following,
      // public_repos,
      // public_gists,
      // hireable
    } = this.props.user;

    // const { loading } = this.props;

    return (
      <div className='container'>
        <h2>{name}</h2>

        <Link to={'/'} className='btn btn-dark btn-sm my-1' >
          Go back
        </Link>
      </div>
    )
  }
}

export default User;
