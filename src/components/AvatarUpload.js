import React, {Component} from 'react'
import Avatar from "@material-ui/core/Avatar";
import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';
import {withStyles} from "@material-ui/core";
import {compose} from "redux";

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
        const formData = new FormData
        formData.append('img', file)
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <input type="file" hidden ref={this.fileUpload} onChange={this.handleFileUpload}/>
                <Avatar
                    className={classes.large}
                    alt="avatar"
                    ref={this.avatar}
                    onClick={this.showFileUpload}
                    src={this.state.src}
                >
                    <PhotoCameraOutlinedIcon/>
                </Avatar>
            </div>
        )
    }
}

export default compose(
    withStyles(styles, {withTheme: true})
)(AvatarUpload)
