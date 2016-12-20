import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'register',
  getComponent (nextState, next) {
    require.ensure([], (require) => {
			const Register = require('./containers/RegisterContainer').default
			const reducer = require('../../reducers').default

			injectReducer(store, {
				key: 'register',
				reducer
			})

			next(null, Register)
    }, 'register')
  }
})
