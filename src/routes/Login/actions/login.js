import FireBaseTools from '../../../utils/firebase'

//constants
import {
  LOGIN,
  REGISTER,
  FETCH_USER,
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

export function logout(user) {
  const request = FireBaseTools.logoutUser(user)
  return {
    type: LOGOUT,
    payload: request
  }
}
