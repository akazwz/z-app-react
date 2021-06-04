import React, {Component} from 'react'
import Avatar from "@material-ui/core/Avatar";
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';
import {withStyles} from "@material-ui/core";
import {withTranslation} from "react-i18next";
import {compose} from "redux";
import MD5 from "crypto-js/md5"
import EncLatin1 from "crypto-js/enc-latin1"
import {avatarUpload} from "../apis/utils";

const styles = theme => ({
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    }
})

class AvatarUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
        }
        this.fileUpload = React.createRef();
        this.avatar = React.createRef();
        this.showFileUpload = this.showFileUpload.bind(this)
        this.handleFileUpload = this.handleFileUpload.bind(this)
    }

    showFileUpload() {
        this.fileUpload.current.click();
    }

    handleFileUpload() {
        const file = this.fileUpload.current.files[0]
        const url = URL.createObjectURL(file)
        this.setState({
            //src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg',
            src: url,
        })
        const reader = new FileReader()
        reader.readAsBinaryString(file)
        reader.onload = () => {
            const text = reader.result
            const md5HashString = MD5(EncLatin1.parse(text)).toString()
            const formData = new FormData()
            formData.append('file', file)
            formData.append('md5', md5HashString)
            avatarUpload(formData)
                .then((data) => {
                    if (data.code === 2000) {
                        const base = 'http://47.96.24.50:8000/';
                        const url = base + data.data.url;
                        this.setState({
                            src: url
                        })
                        this.props.handleUrl(url)
                    }
                })
        }
    }

    render() {
        const {classes ,t} = this.props
        return (
            <div>
                <input type="file" hidden ref={this.fileUpload} onChange={this.handleFileUpload}/>
                <Tooltip TransitionComponent={Zoom} title={t('sign-up.chose-avatar')}>
                    <Avatar
                        className={classes.large}
                        alt="avatar"
                        ref={this.avatar}
                        onClick={this.showFileUpload}
                        src={this.state.src}
                    >
                        <PhotoCameraOutlinedIcon/>
                    </Avatar>
                </Tooltip>
            </div>
        )
    }
}

export default compose(
    withTranslation(),
    withStyles(styles, {withTheme: true})
)(AvatarUpload)
