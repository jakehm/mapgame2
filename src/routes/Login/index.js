import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, next) {
    require.ensure([
      './containers/LoginContainer',
      './modules/auth'
    ], (require) => {
      //insert stuff here
    })
  }
})
