import {
  GET_TODOS,
  TODOS_ERROR,
  SET_LOADING,
  ADD_TODO,
  DELETE_TODO
} from './types';

import axios from 'axios';
import {setAlert} from './alert';

export const getTodos = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get('/api/todos');
    

    dispatch({
      type: GET_TODOS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: TODOS_ERROR,
      payload: err.response.data
    });
    }
  };

  export const addTodo = (todos) => async dispatch => {
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    }

    try {
      setLoading();
      const res = await axios.post('/api/todos', todos, config);
      
  
      dispatch({
        type: ADD_TODO,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: TODOS_ERROR,
        payload: err.response.data
      });
      }
    };

    export const deleteTodo = id => async dispatch => {
      try {
        setLoading();
        await axios.delete(`/api/${id}`);
        
    
        dispatch({
          type: DELETE_TODO,
          payload: id
        })
      } catch (err) {
        dispatch({
          type: TODOS_ERROR,
          payload: err.response.data
        });
        }
      };



export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};