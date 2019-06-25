import React from "react"
import { FormControl, TextField, Grid, withStyles } from '@material-ui/core'
import styles from './Login.style'
import Header from '../Header'
// import { Route, Link, BrowserRouter, Redirect as Router } from 'react-router-dom'
import AddButton from "../Button";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userDetails: [],
            username: "",
            password: "",
            loginValue: "Test",
            fieldVal: ''
        }
        this.componentDidMount.bind(this)
    }

    inputText = data => event => {
        this.setState({ [data]: event.target.value })
    }

    componentDidMount() {
        let userData = require('../../data.json')
        this.setState({userDetails: userData})
    }

    validateForm = event => {
        const userDetails = this.state.userDetails
        event.preventDefault()

        for(var i = 0; i < userDetails.length; i++) {
            var obj = userDetails[i];
            if(obj.username === this.state.username && obj.password === this.state.password)
            {
                return window.location = "dashboard"
            } 
        }
        return alert("Wrong Username/Password")
    }


    render() {
        let { classes } = this.props

        return (
            <>
                <Header title={"Login Form"} displaySignUpButton={true} />
                <form onSubmit={this.validateForm} className={classes.loginBox}>
                
                    <Grid container direction="column">
                        <Grid item xs className={classes.pad20}>
                            <FormControl className={classes.formInput}>
                                <TextField
                                    label="Username"
                                    value={this.state.username}
                                    onChange={this.inputText('username')}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs className={classes.pad20}>
                            <FormControl className={classes.formInput}>
                              
                                <TextField
                                    type="password"
                                    label="Password"
                                    value={this.state.password}
                                    onChange={this.inputText('password')}
                                />
                            </FormControl>
                        </Grid>
                        

                        <Grid item xs className={classes.pad20}>
                            <AddButton
                            type={"submit"}
                            text={"Login"} />
                        </Grid>
                    </Grid>

                </form>
            </>
        )
    }
    
}

export default withStyles(styles)(Login)