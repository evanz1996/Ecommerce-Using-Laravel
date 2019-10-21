import React, { Component } from "react";
import styled from "styled-components";
import { BooksConsumer } from "../context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import cart2 from "/Users/User/PoetryCon/public/images/cart2.png";
import PropTypes from "prop-types";
import BooksDetails from "./BooksDetails";

export default class Books extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.productBooks;
        const imageStyle = {
            width: "20px",
            height: "20px"
        };
        return (
            <Router>
                <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <BooksConsumer>
                            {value => (
                                <div
                                    className="img-container p-5"
                                    onClick={() => value.handleDetail(id)}
                                >
                                    <Link to="/details">
                                        <img
                                            src={img}
                                            alt="productBooks"
                                            className="card-img-top"
                                        ></img>
                                    </Link>

                                    <button
                                        className="cart-btn"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? (
                                            <p
                                                className="text-capitalize mb-0"
                                                disabled
                                            >
                                                In Cart
                                            </p>
                                        ) : (
                                            <img
                                                src={cart2}
                                                alt="cart2"
                                                style={imageStyle}
                                            ></img>
                                        )}
                                    </button>
                                </div>
                            )}
                        </BooksConsumer>
                        {/*card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font italic mb-0">
                                <span className="mr-1"> P</span> {price}
                            </h5>
                        </div>
                    </div>
                </ProductWrapper>

                <Route exact path="/details" component={BooksDetails}></Route>
            </Router>
        );
    }
}

Books.propTypes = {
    productBooks: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all is linear;
    }
    .card-footer {
        background: transparent;
        border-color: transparent;
        transition: all is linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0.2);
        }
        .card-footer {
            background: rgba(200, 200, 200);
        }
        .img-container {
            position: relative;
            overflow: hidden;
        }
        .card-img-top {
            transition: all .5s linear;
        }
        .img-container:hover .card-img-top {
            transform: scale(1.2);
        }
        .cart-btn {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0.2rem 0.4rem;
            background: white;
            font-size: 1.4rem;
            border: none;
             
            transform: translate(100%, 100%);
            transition: all .5s linear;
        }
        .img-container:hover .cart-btn{
            transform:translate(0,0);
        }
        .cart-btn:hover{
            cursor:pointer;
        }

        }
    }
`;
