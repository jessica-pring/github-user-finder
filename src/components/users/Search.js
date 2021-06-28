import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  // Tracks changes in the searchbar: text input
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // When submit btn is clicked
  onSubmit = (e) => {
    e.preventDefault();
    // Passes search query as props up to App
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  }
  
  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form" >
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className='btn btn-dark btn-block'
          />
        </form>

        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    )
  }
}

export default Search;
