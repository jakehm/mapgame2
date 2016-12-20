import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
			const Login = require('./containers/LoginContainer').default
			const reducer = require('../../reducers').default

			injectReducer(store, {
				key: 'login',
				reducer
			})

			next(null, Login)
    }, 'login')
  }
})
