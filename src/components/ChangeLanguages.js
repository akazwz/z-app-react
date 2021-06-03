import {useTranslation} from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import React from "react";

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

export default ChangeLanguages
