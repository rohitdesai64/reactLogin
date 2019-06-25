import React from 'react'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'

class AddButton extends React.Component {
    render() {
        return(
            <>
                <Button
                color={this.props.color}
                variant={this.props.variant}
                type={this.props.type}
                onClick={this.props.onClick}
                >
                    {this.props.text}
                </Button>
            </>
        )
    }
}

AddButton.defaultProps = {
    color: "primary",
    variant: "contained",
    type: "button"
}

AddButton.propTypes = {
    text : PropTypes.any.isRequired
}

export default AddButton