import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';

export class User extends Component {
  // Passes the user state to User component
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  }
  
  render() {
    const { 
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) { return <Spinner /> }
 
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>Go back</Link>

        Hireable: {' '}
        { hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' /> }

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt={name} className="round-img" style={{width: '150px'}} />
        
            <h1>{name}</h1>
            { location ? <p>Location: {location}</p> : '' }
          </div>

          <div>
            <ul>
              <li>
                { login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                { company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                { blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>

            { bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}

            <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer" >
              Visit GitHub Profile
            </a>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    )
  }
}

export default User;
