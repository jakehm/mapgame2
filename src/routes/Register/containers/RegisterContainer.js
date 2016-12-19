import { connect } from 'react-redux'
import { register } from '../../../actions/firebaseActions'
import { bindActionCreators } from 'redux'

import Register from '../components/Register'

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ 
    register 
  }, dispatch)
}
  
const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)