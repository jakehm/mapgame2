import React from 'react'

import Loading from 'components/Loading'
import ChangePassword from './ChangePassword'

export default class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.props.fetchUser();
		this.state = {
			message: ''
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(event) {
		event.preventDefault();
		var email = this.refs.email.value;
		var displayName = this.refs.displayName.value;
		this.props.updateUser({email: email, displayName: displayName}).then(data => {
			if (data.payload.errorCode)
				this.setState({message: data.payload.errorMessage})
			else
				this.setState({
					message: "Updated successfuly!"
				})
		}
		)
	}

	render() {
		if (!this.props.profile.currentUser) {
			return <Loading/>
		}

		return (
			<div className="col-md-6">
				<form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
					<h2>User Profile Page</h2>
					<p>{this.state.message}</p>
					<br />
					<div className="form-group">
						<label htmlFor="email">Email: </label>
						<input type="text" defaultValue={this.props.currentUser.email}
							className="form-control" id="email" ref="email" placeholder="Email" name="email"/>
					</div>
					<div className="form-group">
						<label htmlFor="displayName">Display name: </label>
						<input type="text" defaultValue={this.props.currentUser.displayName}
							className="form-control" ref="displayName" id="displayName" placeholder="Display name"
							name="displayName"/>
					</div>
					<button type="submit" className="btn btn-primary">Update</button>
				</form>
				<ChangePassword changePassword={this.props.changePassword} />
			</div>
		)
	}

}
