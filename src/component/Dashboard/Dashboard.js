import React from "react"
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Header from "../Header";

class Dashboard extends React.Component {
    render() {
        return(
            <>
            <Header title={"Dashboard"} />
            <h1>Login Successful</h1>
            </>
        )
    }
}

export default Dashboard