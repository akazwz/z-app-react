import React from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        textAlign: 'center'
    },
}));


export default function HomePage() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <h1>Home Page</h1>
            <p>This is homepage.</p>
        </div>
    )
}
