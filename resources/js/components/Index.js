import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BooksProvider } from "./context";

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(
        <BooksProvider>
            <Index />
        </BooksProvider>,

        document.getElementById("app")
    );
}
