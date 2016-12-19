import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'register',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
			const Register = require('./containers/RegisterContainer').default
			const registerReducer = require('../../reducers').default

			injectReducer(store, {
				key: 'register',
				reducer: registerReducer
			})

			next(null, Register)
    }, 'register')
  }
})
