import React, { Component, Frag } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import ContactUs from "./About/contactUs";
import Settings from "./Settings/Settings";
import Cart from "./Cart/Cart.js";
import store from "/Users/User/PoetryCon/public/images/store.png";
import myCart from "/Users/User/PoetryCon/public/images/myCart.png";
import styled from "styled-components";
import BookLists from "./MyBooks/BookLists";
import BooksDetails from "./MyBooks/BooksDetails";

export default class Header extends Component {
    render() {
        const imageStyle = {
            width: "50px",
            height: "50px"
        };
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <ul className="nav" background="#194D33">
                            <Link to="/"> </Link>
                            <img
                                src={store}
                                alt="store"
                                className="navbar-brand"
                                style={imageStyle}
                            />

                            <li className="nav-item ml-5"></li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mybooks">
                                    My Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">
                                    Contact us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">
                                    Settings
                                </Link>
                            </li>
                        </ul>

                        <Link to="/myCart" className="ml-auto">
                            <img src={myCart} alt="Cart" style={imageStyle} />
                            My cart
                        </Link>
                    </nav>

                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/aboutus" component={About}></Route>
                    <Route exact path="/mybooks" component={BookLists}></Route>
                    <Route
                        exact
                        path="/contactus"
                        component={ContactUs}
                    ></Route>
                    <Route exact path="/settings" component={Settings}></Route>
                    <Route exact path="/myCart" component={Cart} />
                </div>
            </Router>
        );
    }
}

const ButtonContainer = styled.button`
text-transform: capitalize,
font-size: 1.4rem,
background: transparent;    
border: 0.5 prem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color: var(--mainDark);
}
&:focus{}
`;
