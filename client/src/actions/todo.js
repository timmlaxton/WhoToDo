import axios from 'axios';
import {setAlert} from './alert';
import {
  GET_TODOS,
  TODO_ERROR
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
      type: TODO_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })
  }
}