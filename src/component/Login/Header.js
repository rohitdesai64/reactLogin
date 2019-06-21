import React from "react"
import { Button, Toolbar, Typography, AppBar, withStyles } from '@material-ui/core'
import styles from './Login.style'

class Header extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        Login Form
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header