import React, { Component } from "react";
import btnremove from "/Users/User/PoetryCon/public/images/btnremove.png";
import CartTotals from "./CartTotals";

export default function CartItem({ item, value }) {
    const imageStyle = {
        width: "30px",
        height: "30px"
    };
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", height: "5rem " }}
                    className="img-fluid"
                    alt="product"
                ></img>
            </div>
            <div className=" col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className=" col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button
                            className="btn btn-primary mx-1"
                            onClick={() => decrement(id)}
                        >
                            -
                        </button>
                        <button className="btn btn-primary mx-1">
                            {count}
                        </button>
                        <button
                            className="btn btn-primary mx-1"
                            onClick={() => increment(id)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className=" col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <button>
                        <img
                            src={btnremove}
                            alt="removebtn"
                            style={imageStyle}
                        ></img>
                    </button>
                </div>
                <strong> item total: P {total}</strong>
            </div>
        </div>
    );
}
