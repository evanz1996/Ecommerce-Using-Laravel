import React, { Component } from "react";
import { storeBooks, detailProduct } from "./MyBooks/Data";

const BooksContext = React.createContext();
//Provider
//consumer

class BooksProvider extends Component {
    state = {
        productBooks: [],
        detailProduct: detailProduct,
        cart: [],
        openModal: false,
        modalProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProductBooks();
    }

    setProductBooks = () => {
        let tempProductBooks = [];
        storeBooks.forEach(item => {
            const eachBook = { ...item };
            tempProductBooks = [...tempProductBooks, eachBook];
        });
        this.setState(() => {
            return {
                productBooks: tempProductBooks
            };
        });
    };

    getItem = id => {
        const product = this.state.productBooks.find(item => item.id === id);
        return product;
    };

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };
    addToCart = id => {
        // console.log(`this is ${id}`);
        let temProducts = [...this.state.productBooks];
        const index = temProducts.indexOf(this.getItem(id));
        const product = temProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            () => {
                return {
                    products: temProducts,
                    cart: [...this.state.cart, product]
                };
            },
            () => {
                console.log(this.state);
                this.addTotal();
            }
        );
    };
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, openModal: true };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return {
                openModal: false
            };
        });
    };

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(
            () => {
                return { cart: [...tempCart] };
            },
            () => {
                this.addTotal();
            }
        );
    };
    decrement = id => {
        console.log(id);
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        // console.log("selectedProd", selectedProduct);
        const index = tempCart.indexOf(selectedProduct);
        // console.log("index", index);
        const product = tempCart[index];
        console.log("product", product);

        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem();
        }
    };

    removeItem = id => {
        console.log(id);
        let tempProductBooks = [...this.state.productBooks];
        console.log("productBooks", tempProductBooks);
        let tempCart = [...this.state.cart];
        console.log("tempCart", tempCart);

        tempCart = tempCart.filter(item => item.id !== id);
        console.log("tempCart", tempCart);
    };
    clearCart = () => {
        this.setState(
            () => {
                return { cart: [] };
            },
            () => {
                this.setProductBooks();
                this.addTotal();
            }
        );
    };

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        console.log("subtotal", subTotal);
        const tempTax = subTotal * 0.1;
        const Tax = parseFloat(tempTax.toFixed(2));
        console.log("Tax", Tax);
        const Total = subTotal + Tax;
        console.log("Total", Total);

        this.setState(() => {
            return { cartSubtotal: subTotal, cartTax: Tax, cartTotal: Total };
        });
    };
    render() {
        return (
            <BooksContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    closeModal: this.closeModal,
                    openModal: this.openModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}
            >
                {this.props.children}
            </BooksContext.Provider>
        );
    }
}
const BooksConsumer = BooksContext.Consumer;
export { BooksProvider, BooksConsumer };
