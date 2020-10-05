import {
  GET_USERS, 
  ADD_USER, 
  DELETE_USER, 
  SET_LOADING, 
  USERS_ERROR} 
  from '../actions/types';


const initialState = {
  users: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return{
        ...state,
        users: action.payload,
        loading: false
      };
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
          loading: false
        };
        case DELETE_USER:
          return {
            ...state,
            users: state.users.filter(user => user.id !== action.payload),
            loading: false
          }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
      case USERS_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload,
          loading: false
        }
    default:
      return state;
  }
}