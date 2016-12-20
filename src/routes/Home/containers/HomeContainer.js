import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, register, fetchUser, logout } from '../../../actions/firebaseActions'

import Home from '../components/Home'

const mapStateToProps = state => ({
  currentUser: state.home.currentUser
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchUser, logout }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Home)
