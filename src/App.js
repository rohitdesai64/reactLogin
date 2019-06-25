import React from 'react';
import { Grid } from '@material-ui/core'
import Dashboard from "./component/Dashboard"
import { Route, Redirect as Router } from 'react-router-dom'
import './css/App.css'
import Login from './component/Login'

class App extends React.Component {

	render() {
	return (
		<Grid container direction="column" alignItems="center" justify="center" className="mainBody">
			{/* <Login /> */}
			<Route 
			exact
			path="/"
			render={() => <Login/>} 
			/>
			<Route 
			exact
			path="/dashboard"
			render={() => <Dashboard/>}
			/>

		</Grid>
	)
}
}

export default App;
