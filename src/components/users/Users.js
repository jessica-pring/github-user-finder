import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <div>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1em'
}

export default Users;
