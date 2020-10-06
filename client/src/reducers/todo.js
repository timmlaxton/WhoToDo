import {
  GET_TODOS,
  TODOS_ERROR,

  SET_LOADING
  
} from '../actions/types'


const initialState = {
  todos: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
     
          case SET_LOADING:
            return {
             ...state,
             loading: true
        };
      case TODOS_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
          
        }
    default:
      return state;
  }
};