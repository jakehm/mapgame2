import React from 'react'
import { browserHistory } from 'react-router'

export default class Register extends React.Component {

  constructor (props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.state = {
      message: '',
    }
  }

  onFormSubmit (event) {
    event.preventDefault()
    const email = this.refs.email.value
    const password = this.refs.password.value
    this.props.register({ 
      email, 
      password 
    }).then((data) => {
      if (data.payload.errorCode)
        this.setState({ message: data.payload.errorMessage });
      else
        browserHistory.push('/profile');
    })
  }

  render () {
    return (
      <div className="col-md-4">
        <form id="frmRegister" role="form" onSubmit={this.onFormSubmit}>
          <p>{this.state.message}</p>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="txtRegEmail">Email address</label>
            <input type="email" className="form-control" ref="email" id="txtEmail" placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="txtRegPass">Password</label>
            <input type="password" className="form-control" ref="password" id="txtPass" placeholder="Password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-default">Register</button>
        </form>
      </div>

    )
  }
}

Register.propTypes = {
  register : React.PropTypes.func.isRequired,
}


