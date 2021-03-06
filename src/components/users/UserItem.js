import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, id } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="avatar"
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${id}`} className='btn btn-dark btn-sm my-1' >
          See more
        </Link>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object
}

export default UserItem;
