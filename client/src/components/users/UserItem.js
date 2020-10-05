import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {deleteUser} from '../../actions/userActions'
import M from 'materialize-css/dist/js/materialize.min.js';

 const UserItem = ({user: {id, firstName, lastName}, deleteUser}) => {
  const onDelete = () => {
    deleteUser(id);
    M.toast({html: 'User deleted'});
  }


  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  )
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
}
export default connect(null, {deleteUser})(UserItem);