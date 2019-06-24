import React from "react"
import { Toolbar, Typography, AppBar } from '@material-ui/core'

class Header extends React.Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header