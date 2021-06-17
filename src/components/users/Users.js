import React, { Component } from 'react';

export class Users extends Component {
  state = {
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

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Users;
