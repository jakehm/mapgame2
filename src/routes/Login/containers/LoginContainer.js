import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, register, fetchUser, logout } from '../actions/login'
import React from 'react'
import { Link } from 'react-router'

const mapStateToProps = state => ({
	currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({ fetchUser, logout }, dispatch)
)

class Login extends React.Component {

	constructor (props) {
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
						<li><Link to="/logout" onClick={this.logout}>Logout</Link></li>
					</ul>
				</li>
			)
    else
      return [
        <li key={1}><Link to="/login">Login</Link></li>,
        <li key={2}><Link to="/register">Register</Link></li>
      ]
  }

    render() {
    return (
      <div>
        <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                      data-target=".bs-navbar-collapse"><span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Mapgame Login</Link>

            </div>
            <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
              <ul className="nav navbar-nav">
                <li><Link to="/"> Home</Link></li>
                ,
              </ul>
              <ul className="nav navbar-nav navbar-right">
                { this.renderUserMenu(this.props.currentUser) }
              </ul>
            </nav>
          </div>
        </header>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
