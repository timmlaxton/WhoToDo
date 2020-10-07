import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Moment from 'react-moment';
import {deleteTodo} from '../../actions/todo'

import M from 'materialize-css/dist/js/materialize.min.js';

const TodoItem =  ({  todo, deleteTodo}) => {
  
  const onDelete = () => {
    deleteTodo(todo._id);
    M.toast({html: 'Todo deleted'})
  }

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
            <a href="#!" onClick={onDelete} className="secondary-content">
              <i className="material-icons grey-text">delete</i>
            </a>
      </div>
    </li>
   )
}
  




TodoItem.propTypes = {
todo: PropTypes.object.isRequired,
deleteTodo: PropTypes.func.isRequired,

}




export default connect(null, {deleteTodo})(TodoItem)
