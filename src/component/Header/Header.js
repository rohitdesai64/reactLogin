import React from "react"
import { Toolbar, Typography, AppBar, withStyles, Grid, TextField } from '@material-ui/core'
import styles from './Header.style'
import AddButton from "../Button"
import AddDialog from "../Dialog"

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            signUpDialog: false,
            name: '',
            username: '',
            password: ''
        }
    }

    handleDialog = () => {
        this.setState({ signUpDialog: true })
    }

    closeDialog = () => {
        this.setState({ signUpDialog: false })
    }

    handleInput = value => e => {
        this.setState({ [value]: e.target.value })
    }

    userSignUp = () => {
        console.log("Name==", this.state.name, "Username=", this.state.username, "Password=", this.state.password)
    }

    render() {
        const {classes} = this.props
        const displaySignUpButton = this.props.displaySignUpButton
        const signUpAction = [<AddButton text={"Sign Up"} onClick={this.userSignUp}></AddButton>]
        const signUpForm = <>
            <Grid container alignItems="center" justify="center">
                <Grid item xs={8} className={classes.padd15}>
                    <TextField
                        required
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleInput('name')}
                        className={classes.fullWidth}
                    />
                </Grid>
                <Grid item xs={8} className={classes.padd15}>
                    <TextField
                        required
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                        className={classes.fullWidth}
                    />
                </Grid>
                <Grid item xs={8} className={classes.padd15}>
                    <TextField
                        required
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        className={classes.fullWidth}
                    />
                </Grid>
            </Grid>
        </>

        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.grow}>
                        {this.props.title}
                    </Typography>

                    {displaySignUpButton && (
                        <>
                        <AddButton 
                        color={"secondary"} 
                        onClick={this.handleDialog} 
                        text={"SignUp"} />
                        <AddDialog
                            onClose={this.closeDialog}
                            open={this.state.signUpDialog}
                            title={"Sign up"}
                            content={signUpForm}
                            actions={signUpAction}
                            maxWidth={"xs"}  />
                        </>
                    )}
                    

                </Toolbar>
            </AppBar>
        )
    }
}

Header.defaultProps = {
    displaySignUpButton: false
}

export default withStyles(styles)(Header)