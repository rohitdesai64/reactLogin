import React from "react"
import { Button, FormControl, TextField, Grid, withStyles } from '@material-ui/core'
import styles from './Login.style'
import Header from './Header'
import axios from 'axios'
import Dashboard from "../Dashboard"
import { Route, Link, BrowserRouter, Redirect as Router } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "111",
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
        // this.setState({loginValue: this.state.loginValue})
        return this.props.loginValue
    }

    validateForm = event => {
        var data = require('./data.json')

        event.preventDefault()
        let username = this.state.username
        let password = this.state.password


        this.props.handlerFromParant(this.state.loginValue)

        if (username === data.username && password === data.password) {
            // alert('Done')
            return <Dashboard />
        } else {
            // alert("Fail")
            // return <Redirect to='/Dashboard'  />
            return (
                this.props.username

            )
        }
    }


    render() {
        let { classes } = this.props

        return (
            <>
                <Header />
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
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                        </Button>
                        </Grid>
                    </Grid>

                </form>
            </>
        )
    }
    
}



export default withStyles(styles)(Login)