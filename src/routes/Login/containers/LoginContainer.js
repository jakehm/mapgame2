import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, fetchUser } from 'actions/firebaseActions'

import Login from '../components/Login'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
    fetchUser,
  }, dispatch)
}

function mapStateToProps(state) {
  return { currentUser: state.login.currentUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)