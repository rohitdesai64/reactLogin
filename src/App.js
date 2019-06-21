import React from 'react';
import { Grid } from '@material-ui/core'
import Dashboard from "./component/Dashboard"
import { Route, Link, BrowserRouter, Redirect as Router } from 'react-router-dom'
import './css/App.css'
import Login from './component/Login';


class App extends React.Component {
	state = {
		// loginValue: ''
		user: null
	}

	handleData(data) {
		this.setState({
		  fromChild: data
		});
	  }

	loginValue() {
		this.setState({ user: this.state.username })
		console.log(this.user)
	  }

	render() {
	return (
		<Grid container direction="column" alignItems="center" justify="center" className="mainBody">
			11 {this.state.fromChild}22
			<Login handlerFromParant={this.handleData} />
		</Grid>
	)
}
}

export default App;
