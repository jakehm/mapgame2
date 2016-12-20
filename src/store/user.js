import FireBaseTools from 'utils/firebase'

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const FETCH_USER = 'FETCH_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const PASSWORD_RESET_EMAIL = 'PASSWORD_RESET_EMAIL'
export const LOGOUT = 'LOGOUT'

// ------------------------------------
// Actions
// ------------------------------------
export function login (user) {
  const request = FireBaseTools.loginUser(user)
  return {
    type: LOGIN,
    payload: request
  }
}

export function register(user) {
  const request = FireBaseTools.registerUser(user)
  return {
    type: REGISTER,
    payload: request
  }
}

export function fetchUser() {
  const request = FireBaseTools.fetchUser()
  return {
    type: FETCH_USER,
    payload: request
  }
}

export function updateUser(user) {
  const request = FireBaseTools.updateUserProfile(user);
  return {
    type: UPDATE_USER,
    payload: request
  }
}

export function changePassword(newPassword) {
  const request = FireBaseTools.changePassword(newPassword)
  return {
    type: CHANGE_PASSWORD,
    payload: request
  }
}

export function resetPasswordEmail(email) {
  const request = FireBaseTools.resetPasswordEmail(email);
  return {
    type: PASSWORD_RESET_EMAIL,
    payload: request
  }
}

export function logout(user) {
  const request = FireBaseTools.logoutUser(user)
  return {
    type: LOGOUT,
    payload: request
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
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
