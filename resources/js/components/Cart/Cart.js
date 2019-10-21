import React, { Component } from "react";
import Title from "../MyBooks/Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { BooksConsumer } from "../context";
import Cartlists from "./Cartlists";
import CartTotals from "./CartTotals";
export default class Cart extends Component {
    render() {
        return (
            <BooksConsumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="My" title="Cart"></Title>
                                <CartColumn />
                                <Cartlists value={value} />
                                <CartTotals value={value} />
                            </React.Fragment>
                        );
                    } else {
                        return <EmptyCart />;
                    }
                }}
            </BooksConsumer>
        );
    }
}
