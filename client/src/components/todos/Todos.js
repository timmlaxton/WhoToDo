import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import SearchBar from '../../components/layout/SearchBar';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';
import {getTodos} from '../../actions/todo';
import PreLoader from '../layout/Preloader'

const Todos = ({getTodos, todo: {todos, loading}}) => {
  useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, [getTodos])

  if(loading || todos === null){
    return <PreLoader/>
  } 
  
  return (
     <Fragment> 
     <SearchBar/>
     <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Todos</h4>
      </li>
      {!loading && Todos.length === 0 ? (
        <p className="center">No Todos Exist</p>
      ) : (
        todos.map(todo => <TodoItem todo={todo} key={todo._id} />)
      )}
     
     </ul>
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
