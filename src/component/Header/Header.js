import React from "react"
import { Toolbar, Typography, AppBar, withStyles } from '@material-ui/core'
import styles from './Header.style'
import AddButton from "../Button";

class Header extends React.Component {
    render() {
        const {classes} = this.props
        const displaySignUpButton = this.props.displaySignUpButton

        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.grow}>
                        {this.props.title}
                    </Typography>

                    {displaySignUpButton && (
                        <AddButton 
                        color={"secondary"} 
                        onClick={this.signUpDialog} 
                        text={"SignUp"} />
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