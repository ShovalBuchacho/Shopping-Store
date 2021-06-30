import React, { Component } from "react";
import {HashRouter as Router,Switch,Route,Link} from "react-router-dom";
import "./Style.css";
import Cart from "./Components/Cart.js";
import HomePage from "./Components/Home_Page.js";
import cart_icon from "./images/shopping_cart.png";
import home_icon from "./images/home.png";

// Shopping Website Project

export default class App extends Component {
  state = {
    first_page: false, // if false - Home page appears
    list: [],
  };

  is_Cart_Show = () => {
    if (this.state.first_page == true) {
      // show Cart component.
      return (
        <div>
          <Cart
            list={this.state.list}
            del={this.delete_Product}
            buyAll={this.buy_All_Products}
          />
        </div>
      );
    } else {
      // show Hompage component.
      return (
        <div>
          <HomePage list={this.state.list} pData={this.add_Product} />
        </div>
      );
    }
  };

  // func send to HomePage component, set products list with one more product.
  add_Product = (name_product, price_product) => {
    if (
      name_product.length > 0 &&
      price_product > 0 &&
      price_product.length <= 8
    ) {
      this.setState({
        list: [
          ...this.state.list,
          { name: name_product, price: price_product },
        ],
      });
    } else
      alert(
        "The name must include characters only, the price must include numbers only"
      );
  };

  // func sends to Product component, set list without chosen product
  delete_Product = (i) => {
    let tempList = this.state.list.filter((element, index) => index != i);
    this.setState({ list: tempList });
  };

  // func sends to Cart component, set list to empty list.
  buy_All_Products = () => {
    if (this.state.list.length == 0)
      alert("Unable to place order, your cart is empty");
    else {
      alert("All the products you purchased, on the way to you :)");
    }
  };

  render() {
    return (
      <div>
        <br />
        <div id="header">
          <img
            className="nav"
            src={home_icon}
            id="home_icon"
            onClick={() => {
              this.setState({ first_page: false });
            }}
          />
          <h1 className="nav"> Shopping web site</h1>
          <img
            className="nav"
            src={cart_icon}
            id="cart_icon"
            onClick={() => {
              this.setState({ first_page: true });
            }}
          />
          <p className="nav" id="productsNum">
            {this.state.list.length}
          </p>
        </div>
        <br />
        <br />

        {this.is_Cart_Show()}
      </div>
    );
  }
}
