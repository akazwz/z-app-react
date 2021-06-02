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
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {useTranslation} from "react-i18next";


function handleSubmit(event) {
    event.preventDefault()
    alert(event)
    console.log(event)
}

// 切换语言按钮,简体中文和English
function ChangeLanguages() {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then()
    }
    return (
        <Grid container>
            <Grid item xs>
                <Button
                    type="button"
                    color="primary"
                    onClick={() => changeLanguage('en')}
                >
                    English
                </Button>
            </Grid>
            <Grid item>
                <Button
                    type="button"
                    color="primary"
                    onClick={() => changeLanguage('zh')}
                >
                    简体中文
                </Button>
            </Grid>
        </Grid>
    )
}

// 版权声明
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="https://akazwz.com/">
                AKAZWZ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

// 自定义样式
const useStyles = makeStyles((theme) => ({
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
}));

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.email)
        alert('email:' + this.state.email + 'password:' + this.state.password)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
                <input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

// 注册界面
export default function SignIn() {
    const {t} = useTranslation();

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutLinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('login.title')}
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={t('login.email')}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t('login.password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label={t('login.remember')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {t('login.submit')}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {t('login.forgot-password')}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {t('login.sign-up')}
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
    );
}
