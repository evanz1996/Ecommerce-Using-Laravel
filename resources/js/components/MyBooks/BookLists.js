import React, { Component, Fragment } from "react";
import Title from "./Title";
import { BooksConsumer } from "../context";
import Books from "./Books";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "../Modal";

export default class BookLists extends Component {
    // state = {
    //     productBooks: storeBooks
    // };

    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="products"></Title>
                        <div className="row">
                            <BooksConsumer>
                                {value => {
                                    // console.log(value);
                                    return value.productBooks.map(
                                        productBooks => {
                                            return (
                                                <Books
                                                    key={productBooks.id}
                                                    productBooks={productBooks}
                                                />
                                            );
                                        }
                                    );
                                }}
                            </BooksConsumer>
                        </div>
                        {/* <Modal /> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}
