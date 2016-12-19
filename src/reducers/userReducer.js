import {
  LOGIN,
  REGISTER,
  FETCH_USER,
  UPDATE_USER,
  CHANGE_PASSWORD,
  PASSWORD_RESET_EMAIL,
  LOGOUT
} from '../actions/types';


export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case LOGOUT:
      return action.payload;
    case REGISTER:
      return action.payload;
    case LOGIN:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    case CHANGE_PASSWORD:
      return action.payload
    case PASSWORD_RESET_EMAIL:
      return action.payload
  }
  return state;
}
