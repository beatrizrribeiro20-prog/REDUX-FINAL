import { combineReducers } from 'redux';

import {
  FETCH_USERS_LOADING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  DELETE_USER,
} from './actions';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          (user) => user.email !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
});