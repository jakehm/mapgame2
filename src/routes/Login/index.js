import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, next) {
    require.ensure([
      './containers/LoginContainer',
      './reducers'
    ], (require) => {
			const Login = require('./containers/LoginContainer').default
			const loginReducer = require('./reducers').default

			injectReducer(store, {
				key: 'login',
				reducer: loginReducer
			})

			next(null, Login)
    })
  }
})
