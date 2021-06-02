import React, {Component} from "react";
import Button from "@material-ui/core/Button";

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload File:
                    <input type="file" ref={this.fileInput}/>
                </label>
                <br/>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </form>
        )
    }
}

export default FileInput
