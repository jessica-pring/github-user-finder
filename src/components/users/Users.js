import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: "id",
          login: "mojombo",
          avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/mojombo"
        },
        {
          id: "id",
          login: "defunkt",
          avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
          html_url: "https://github.com/defunkt"
        },      {
          id: "id",
          login: "pjhyett",
          avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
          html_url: "https://github.com/pjhyett"
        }
      ]
    }
  }
 

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
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
