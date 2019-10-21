import React, { Component } from "react";
import axios from "axios";

export default class UploadCover extends Component {
    constructor() {
        super();
        this.state = {
            selectedFile: ""
        };
    }

    onChangeCoverUpload(e) {
        this.setState({
            selectedFile: e.target.value
        });
        // selectedFile: e.target.files[0];
        // console.log(e.target.files[0]);
    }
    onUpload(e) {
        e.preventDefault();
        const selectedPhoto = {
            SelectedFile: this.state.selectedFile
        };

        axios
            .post("http://127.0.0.1:8000/home.upload_cover", selectedPhoto)
            .then(response => Console.log(response.data));
    }

    render() {
        return (
            <div>
                <h1>Please Upload cover photo</h1>
                <div className="App">
                    <input
                        type="file"
                        onChange={this.onChangeCoverUpload}
                    ></input>
                    <button onClick={this.onUpload}> Upload </button>
                </div>
            </div>
        );
    }
}
