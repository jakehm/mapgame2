import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, register, fetchUser, logout } from '../actions/login'
import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropDown, MenuItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

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
				<Navbar collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Login Page</Link>
						</Navbar.Brand>
						<Navbar.Toggle />	
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem><Link to="/"> Home</Link></NavItem>

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
