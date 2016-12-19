import FireBaseTools from '../utils/firebase'

//constants
import {
  LOGIN,
  REGISTER,
  FETCH_USER,
  UPDATE_USER,
  CHANGE_PASSWORD,
  PASSWORD_RESET_EMAIL,
  LOGOUT
} from './types'

//actions
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
