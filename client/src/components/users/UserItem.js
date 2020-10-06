import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user  }) => {
  return (
    <li className="collection-item">
      <div>
        {user.firstName} {user.lastName}
        <a href="#!" className="secondary-content"> 
          <i className="material-icons grey-txt">delete</i>
        </a>
      </div>
    </li>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
