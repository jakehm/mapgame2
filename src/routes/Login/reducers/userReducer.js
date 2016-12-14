import {
  LOGIN,
  REGISTER,
  FETCH_USER,
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
  }
  return state;
}
