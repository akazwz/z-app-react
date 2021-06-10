import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    item: {
    },
    bookName: {
        textAlign: 'right'
    },
    digest: {
        textIndent: '2em',
    }
}))

const DigestBody = () => {
    const classes = useStyles()
    const arr = [
        {p: "我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？", book_name: "狂人日记"},
        {p: "我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？", book_name: "狂人日记"},
        {p: "我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？", book_name: "狂人日记"},
        {p: "我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？", book_name: "狂人日记"},
        {p: "我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗，何以看我两眼呢？", book_name: "狂人日记"},
    ];
    const rows = arr.map((row, index) => {
        return (
            <React.Fragment>
                <ListItem className={classes.item} button>
                    <ListItemIcon>
                        <MenuBookIcon fontSize="large"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <p className={classes.digest}>
                                    {row.p}
                                </p>
                                <Typography className={classes.bookName}>
                                    {"<<"} {row.book_name}{">>"}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider/>
            </React.Fragment>
        )
    })
    return (
        <List className={classes.root}>
            {rows}
        </List>
    )

}

export default function Digest() {
    return (
        <DigestBody/>
    )
}
