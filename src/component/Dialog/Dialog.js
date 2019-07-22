import React from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import CloseIcon from "@material-ui/icons/Close"
import PropTypes from "prop-types"

const styles = theme => ({
  paddSpace: {
    padding: "50px 20px 20px"
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 1.2,
    color: "#58585b",
    textAlign: "center"
  },
  dialogFooter: {
    textAlign: "center",
    padding: 20
  },
  closeDialog: {
    position: "absolute",
    right: 0,
    top: 0
  },
  content: {
    padding: "0 20px"
  },
  largeIcon: {
    width: 35,
    height: 35
  }
})

class AddDialog extends React.Component {
  render() {
    let { classes } = this.props

    return (
      <>
        <Dialog
          fullWidth={true}
          maxWidth={this.props.maxWidth}
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <DialogTitle className={classes.paddSpace}>
            <IconButton
              onClick={this.props.onClose}
              aria-label="Close"
              className={classes.closeDialog}
            >
              <CloseIcon className={classes.largeIcon} />
            </IconButton>

            <Typography className={classes.title}>
              {this.props.title}
            </Typography>
          </DialogTitle>

          <DialogContent className={classes.content}>
            {this.props.content}
          </DialogContent>

          <DialogActions className={classes.dialogFooter}>
            <Grid container justify="center">
              <Grid item>{this.props.actions}</Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

AddDialog.defaultProps = {
  maxWidth: "md",
  open: false
}

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  content: PropTypes.node.isRequired
}

export default withStyles(styles)(AddDialog)
