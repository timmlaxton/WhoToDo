import {
  GET_TODOS,
  TODOS_ERROR,
  SET_LOADING,
  ADD_TODO,
  DELETE_TODO, 
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODO
} from './types';

import axios from 'axios';


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

    // Delete todo
    export const deleteTodo = id => async dispatch => {
      try {
        setLoading();
        
        await axios.delete(`api/todos/${id}`);
        
       
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

       // Update todo
    export const updateTodo = todo => async dispatch => {
      const config = {
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        setLoading();
        
        const res = await axios.put(`api/todos/${todo.id}`, todo, config);
      
       
       
        dispatch({
          type: UPDATE_TODO,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: TODOS_ERROR,
          payload: err.response.data
        });
        }
      };


      // Set Current todo
      export const setCurrent = todo => {
        return {
          type: SET_CURRENT,
          payload: todo
        }
      }

      // Clear Current todo
      export const clearCurrent = () => {
        return {
          type: CLEAR_CURRENT
          
        }
      }




export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};