import React, { useEffect} from 'react'
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import {getUsers} from '../../actions/userActions';

const UserListModal = ({getUsers, user: {users, loading}}) => {


useEffect(() => {
  getUsers();
  //eslint-diasble-next-line //
}, []);


  return (
    <div id="user-list-modal" className="modal">
      <div className="modal-content">
        <h4>User List</h4>
        <ul className="collection">
          {!loading && users !== null && users.map(user => 
            <UserItem user={user} key={user.id}/>)}
        </ul>
      </div>
    </div>
  );
};

UserListModal.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {getUsers})(UserListModal);