import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AddInfo from "./addInfo";
import UploadBookCover from "./uploadBookCover";
import UploadCover from "./UploadCover";
import Footer from "./footer";

export default class Home extends Component {
    render() {
        const Div1 = {
            background: "FCCB00",
            height: "90vh"
        };
        return (
            <div>
                <Router>
                    <div>
                        <Link to="/home.upload_cover">Upload Cover</Link>{" "}
                    </div>
                    <div>
                        <Route
                            exact
                            path="/home.add_info"
                            component={AddInfo}
                        ></Route>
                        <Route
                            exact
                            path="/home.upload_book_cover"
                            component={UploadBookCover}
                        ></Route>
                        <Route
                            exact
                            path="/home.upload_cover"
                            component={UploadCover}
                        ></Route>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
