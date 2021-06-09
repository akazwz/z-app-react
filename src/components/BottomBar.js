import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    bvg: {
        width: "100%"
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: 'transparent'
    },
}));

export default function BottomBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
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
                    <BottomNavigationAction label="Home" icon={<HomeIcon/>} component={Link} to="/"/>
                    <BottomNavigationAction label="Sign In" icon={<PersonIcon/>} component={Link} to="/sign-in"/>
                    <BottomNavigationAction label="Sign Up" icon={<FaceIcon/>} component={Link} to="sign-up"/>
                </BottomNavigation>
            </Toolbar>
        </AppBar>
    );
}
