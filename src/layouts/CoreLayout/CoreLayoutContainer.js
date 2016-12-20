import { connect } from 'react-redux'
import { login, register, fetchUser, logout } from 'store/user'

import CoreLayout from './CoreLayout'

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = {
  login,
  register,
  fetchUser,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
