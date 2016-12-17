import React from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, fetchUser } from '../actions/login'

class Login extends React.Component {

	constructor (props) {
		super(props)
		this.onFormSubmit = this.onFormSubmit.bind(this)
		this.state = {
			message: '',
		}
	}
