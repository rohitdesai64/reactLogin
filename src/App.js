import React from 'react';
import { Grid } from '@material-ui/core'
import Dashboard from "./component/Dashboard"
import { Route, Link, BrowserRouter, Redirect as Router } from 'react-router-dom'
import './css/App.css'
import Login from './component/Login'

class App extends React.Component {
	state = {
		user: null
	}

	render() {
	return (
		<Grid container direction="column" alignItems="center" justify="center" className="mainBody">
			{/* <Login /> */}
			<Route path="/" component={Login} />
      		<Route path="/dashboard" component={Dashboard} />

		</Grid>
	)
}
}

export default App;
