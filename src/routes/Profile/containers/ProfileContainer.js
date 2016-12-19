import { connect } from 'react-redux'
import { fetchUser, updateUser, changePassword, resetPasswordEmail } from '../../../actions/firebaseActions'
import { bindActionCreators } from 'redux'

import Profile from '../components/Profile'


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ 
    fetchUser,
    updateUser,
    changePassword,
    resetPasswordEmail
  }, dispatch)
}

const mapStateToProps = state => {
  console.log(state)
  return({
    currentUser: state.profile.currentUser
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)