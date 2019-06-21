import React from "react"
import { AppBar, Toolbar, Typography } from '@material-ui/core'

class Dashboard extends React.Component {
    render() {
        return(
            <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <h1>Login Successful</h1>
            </>
        )
    }
}

export default Dashboard