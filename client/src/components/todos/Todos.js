import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../../components/layout/SearchBar';
import AddTodoModal from './AddTodoModal'
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import {getTodos} from '../../actions/todo';
import PreLoader from '../layout/Preloader'
import AddBtn from '../layout/AddBtn';

import AddUserModal from '../users/AddUserModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import'../../App.css'

const Todos = ({todo: {todos, loading}, getTodos}) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
    M.AutoInit();
  }, [getTodos])

  if(loading || todos === null){
    return <PreLoader/>
  } 
  
  return (
     <Fragment> 
     <SearchBar/>
     <AddTodoModal/>
     <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Todos</h4>
      </li>
      {!loading && todos.length === 0 ? (
        <p className="center">No Todos Exist</p>
      ) : (
        todos.map(todo => <TodoItem todo={todo} key={todo._id} />)
      )}
     
     </ul>
     <AddBtn/>
     
     <AddUserModal/>
     </Fragment>
     
   
  
  )
}

Todos.propTypes = {
 getTodos: PropTypes.func.isRequired,
 todo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, {getTodos})(Todos)
