import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {withTranslation} from "react-i18next";
import {withStyles} from "@material-ui/core";
import {compose} from "redux";
import {signIn} from "../apis/utils";
import Copyright from "../components/Copyright";
import ChangeLanguages from "../components/ChangeLanguages";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

// input组件是不受控组件,要用 class component 来控制组件,单一数据源 input controlled component
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.username)
        const signInData = {username: this.state.username, password: this.state.password}
        signIn(signInData).then(res => {
            const {data, code, msg} = res
            const {token} = data
            if (code === 2000) {
                alert(msg)
                localStorage.setItem('token', token)
            }
        })
    }

    render() {
        const {classes, t} = this.props
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutLinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {t('sign-in.title')}
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label={t('sign-in.username')}
                            name="username"
                            autoComplete="username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={t('sign-in.password')}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label={t('sign-in.remember')}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleSubmit}
                        >
                            {t('sign-in.submit')}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    {t('sign-in.forgot-password')}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {t('sign-in.sign-up')}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <ChangeLanguages/>
                </Box>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        )
    }
}

export default compose(
    withTranslation(),
    withStyles(styles, {withTheme: true})
)(SignIn)
