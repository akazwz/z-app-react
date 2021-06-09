import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core";
import {compose} from "redux";
import Copyright from "../components/Copyright";
import ChangeLanguages from "../components/ChangeLanguages";
import AvatarUpload from "../components/AvatarUpload";
import {signUp} from "../apis/utils";
import SnackBarMessage from "../components/SnackBarMessage";

// 定义样式
const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        const {t} = props
        this.state = {
            url: '',
            username: '',
            nickname: '',
            password: '',
            severity: 'success',
            message: '',
            success_message: t('sign-up.sign-up-success-message'),
            fail_message: t('sign-up.sign-up-fail-message'),
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleNicknameChange = this.handleNicknameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleUrl = this.handleUrl.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handleNicknameChange(e) {
        this.setState({nickname: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleUrl(url) {
        this.setState({
            url: url,
        })
    }

    handleSignUpSuccess = () => {
        this.setState({
            isOpen: true,
            severity: 'success',
            message: this.state.success_message
        })
    }

    handleSignUpFail = () => {
        this.setState({
            isOpen: true,
            severity: 'error',
            message: this.state.fail_message
        })
    }

    handleCloseMessage = () => {
        this.setState({
            isOpen: false,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const username = this.state.username
        const nickname = this.state.nickname
        const password = this.state.password
        const url = this.state.url
        const data = {
            username: username,
            nick_name: nickname,
            password: password,
            header_img: url,
        }
        signUp(data)
            .then((data) => {
                if (data.code === 2000) {
                    this.handleSignUpSuccess()
                } else {
                    this.handleSignUpFail()
                }
            });
    }

    render() {
        const {classes, t} = this.props

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        {t('sign-up.title')}
                    </Typography>
                    <br/>
                    <AvatarUpload handleUrl={this.handleUrl}/>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label={t('sign-up.username')}
                                    onChange={this.handleUsernameChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="nickname"
                                    variant="outlined"
                                    fullWidth
                                    id="nickname"
                                    label={t('sign-up.nickname')}
                                    onChange={this.handleNicknameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label={t('sign-up.password')}
                                    type="password"
                                    id="password"
                                    onChange={this.handlePasswordChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="agree-user-policy" color="primary"/>}
                                    label={t('sign-up.agree-user-policy')}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                            {t('sign-up.submit')}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/sign-in" variant="body2">
                                    {t('sign-up.sign-in')}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <ChangeLanguages/>
                </Box>
                <Box mt={8}>
                    <SnackBarMessage
                        isOpen={this.state.isOpen}
                        message={this.state.message}
                        severity={this.state.severity}
                        handleClose={this.handleCloseMessage}
                    />
                </Box>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        )
    }
}

export default compose(
    withTranslation(),
    withStyles(styles, {withTheme: true}),
)(SignUp)
