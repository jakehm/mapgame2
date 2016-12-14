import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, register, fetchUser, logout } from '../actions/login'
import React from 'react'
import { Link } from 'react-router'

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

const mapDispatchToProps dispatch => ({
	bindActionCreators({ fetchUser, logout }, dispatch)
})

class Login extends React.Component {

	contructor (props) {
		super(props)
		this.props.fetchUser()
		this.logout = this.logout.bind(this)
	}

	logout () {
		this.props.logout().then(data => {
			this.props.fetchUser()
		})
	}

	renderUserMenu (currentUser) {
		if (currentUser && currentUser.uid)
			return (
				<li className="dropdown">
					<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
						aria-haspopup="true" aria-expanded="false">
						{currentUser.email} <span className="caret"></span></a>
					<ul className="dropdown-menu">
						<li><Link to="/profile">Profile</Link></li>
						<li role="separator" className="divider"></li>
						<li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
					</ul>
				</li>
			)


export default connect(mapStateToProps, mapDispatchToProps)(Login)
