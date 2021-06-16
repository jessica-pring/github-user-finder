import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Navbar',
    icon: 'fab fa-github'
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="navbar">
        <h4>
          <i className={this.props.icon}></i>  {this.props.title}
        </h4>
      </nav>
    )
  }
}

export default Navbar
