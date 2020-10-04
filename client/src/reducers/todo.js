import {
  GET_TODOS,
  TODO_ERROR
  
} from '../actions/types'


const initialState = {
  todos: [],
  todo: null,
  loading: true,
  error: {}
}
export default function(state = initialState, action) {
  const { type, payload} = action;

  switch(type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
        loading: false
      }
      case TODO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
      default: 
      return state;
  }
}