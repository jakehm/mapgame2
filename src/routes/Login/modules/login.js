

//constants
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const FETCH_USER = 'FETCH_USER'
export const LOGOUT = 'LOGOUT'

//actions
export function login (user) {
	const request = FireBaseTools.loginUser(user)
	return {
		type: LOGIN,
		payload: request
	}
}
