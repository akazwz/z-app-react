import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    bvg: {
        width: '100%',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: 'transparent',
    }
}));

export default function BottomBar(props) {
    const classes = useStyles();
    const {t} = useTranslation();

    const [value, setValue] = React.useState(0);

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.bvg}
                    >
                        <BottomNavigationAction label={t("bottom-bar.home")} icon={<HomeIcon/>} component={Link} to="/"/>
                        <BottomNavigationAction label={t("bottom-bar.digest")} icon={<BookmarkBorderIcon/>} component={Link}
                                                to="/digest"/>
                        <BottomNavigationAction label={t("bottom-bar.profile")} icon={<PersonIcon/>} component={Link} to="/sign-in"/>
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </React.Fragment>
    );
}
