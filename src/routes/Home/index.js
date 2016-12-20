import {injectReducer} from '../../store/reducers'

export default (store) => ({
  getComponent (nextState, next) {
    require.ensure([
      './containers/HomeContainer',
      '../../reducers'
    ], (require) => {
      const Home = require('./containers/HomeContainer').default
      const reducer = require('../../reducers').default

      injectReducer(store, {
        key: 'home',
        reducer
      })

      next(null, Home)
    })
  }
})
