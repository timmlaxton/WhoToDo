import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';


const TodoItem =  ({ auth, todo}) => {
  return (
    <li className="collection-item">
      <div>
        <a 
        href='#edit-todo-modal' 
        className={`modal-trigger ${
          todo.attention ? 'red-text' : 'blue-text'
          }`}
          >
            {todo.message}
            </a>
            <br />
            <span className='grey-text'>
              <span className="black-text">ID {todo.user}</span> last updated by {' '}
              <span className="black-text">{todo.name}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{todo.date}</Moment>
            </span>
            <a href="#!" className="secondary-content">
              <i className="material-icons grey-text">delete</i>
            </a>
      </div>
    </li>
   )
}
  




TodoItem.propTypes = {
todo: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, {}) (TodoItem)