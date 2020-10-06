import React, { useState, useEffect} from 'react'
import axios from 'axios';


const UserListModal = () => {
  const [users, setUsers] = useState ([]);
  const [loading, setLoading] = useState(false)


useEffect(() => {
  getUsers();
  //eslint-diasble-next-line //
}, []);

const getUsers = async () => {
  setLoading(true);
  const res = await axios.get('/api/users');
  const data = await res.json();

  setUsers(data);
  setLoading(false)
};


  return (
    <div id="user-list-modal" className="modal">
      <div className="modal-content">
        <h4>User List</h4>
        <ul className="collection">
          {!loading && users.map(user => (
            <li className='collection.item'>{user}</li>
          ))}
        </ul>
      </div>
    </div>  
    )
  };

   export default UserListModal;