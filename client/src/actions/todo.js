import axios from 'axios';
import {setAlert} from './alert';
import {
  GET_TODOS,
  TODOS_ERROR,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_TODO,
  CLEAR_CURRENT,
  UPDATE_TODO,
  SEARCH_TODOS,
  SET_CURRENT,
  SET_LOADING
} from './types';

export const getTodos = () => async dispatch => {
  try {
    const res = await axios.get('/api/todos');
    

    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status}
    });
    }
  };

export const addTodo = (todo) => async dispatch => {
  try {
    setLoading();

    const {data} = await axios.post('api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    

    dispatch({
      type: ADD_TODO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.data
    })
  }
};

// Delete Todos

export const deleteTodo = (id) => async dispatch => {
  try {
    setLoading();

    await axios.delete(`api/todos/${id}`, {
      method: 'DELETE'
    });
    

    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.data
    })
  }
};

// update todo on server

export const updateTodo = (todo) => async dispatch => {
  try {
    setLoading();

    const {data} = await axios.create(`api/todos/${todo.id}`, {
      method: 'PUT', 
      body: JSON.stringify(todo),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    
    

    dispatch({
      type: UPDATE_TODO,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.data
    })
  }
};

// Search Todos
export const searchTodos = (text) => async dispatch => {
  try {
    setLoading();

    const {data} = await axios(`api/todos?q=${text}`);
    

    dispatch({
      type: SEARCH_TODOS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.data
    })
  }
};

// Set current todo

export const setCurrent = todo => {
  return {
    type: SET_CURRENT,
    payload: todo
  }
}
// clear current todo
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
    
  }
}

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};