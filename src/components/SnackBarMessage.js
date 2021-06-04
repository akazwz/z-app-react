import React, {Component} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert"
import Button from "@material-ui/core/Button";
import {compose} from "redux";
import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core";

function Alert(props) {
    return (
        <MuiAlert
            elevation={6}
            variant="filled"
            {...props}
        />
    );
}

const styles = theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
});

class SnackBarMessage extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            vertical: 'top',
            horizontal: 'center',
        }*/
    }


    render() {
        const {classes, isOpen, handleClose, message, severity} = this.props

        return (
            <div className={classes.root}>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={isOpen}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>
            </div>
        )
    }
}

export default compose(
    withTranslation(),
    withStyles(styles, {withTheme: true})
)(SnackBarMessage)
