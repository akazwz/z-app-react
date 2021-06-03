import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
import Copyright from "../components/Copyright";
import ChangeLanguages from "../components/ChangeLanguages";
import AvatarUpload from "../components/AvatarUpload";

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
    render() {
        const {classes, t} = this.props
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    {/*<Avatar className={classes.avatar}>
                        <LockOutLinedIcon/>
                    </Avatar>*/}
                    <Typography component="h1" variant="h5">
                        {t('sign-up.title')}
                    </Typography>
                    <br/>
                    <AvatarUpload/>
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
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="nickname"
                                    variant="outlined"
                                    fullWidth
                                    id="nickname"
                                    label={t('sign-up.nickname')}
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
                        >
                            {t('sign-up.submit')}
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {t('sign-up.sign-in')}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <ChangeLanguages/>
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
    withStyles(styles, {withTheme: true})
)(SignUp)
