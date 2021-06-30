import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product_1_Name: "",
      product_1_Price: "",
      product_2_Name: "",
      product_2_Price: "",
      product_3_Name: "",
      product_3_Price: "",
      product_4_Name: "",
      product_4_Price: "",
    };
  }

  // update state variables from chosen inputs (on change).
  setDataFromInputs = (element) => {
    if (element.target.id == "product_1_Name")
      this.setState({ product_1_Name: element.target.value });
    else if (element.target.id == "product_1_Price")
      this.setState({ product_1_Price: element.target.value });
    else if (element.target.id == "product_2_Name")
      this.setState({ product_2_Name: element.target.value });
    else if (element.target.id == "product_2_Price")
      this.setState({ product_2_Price: element.target.value });
    else if (element.target.id == "product_3_Name")
      this.setState({ product_3_Name: element.target.value });
    else if (element.target.id == "product_3_Price")
      this.setState({ product_3_Price: element.target.value });
    else if (element.target.id == "product_4_Name")
      this.setState({ product_4_Name: element.target.value });
    else this.setState({ product_4_Price: element .target.value });
  };

  render() {
    return (
      <div id="Products">
        <h2>List of products:</h2>
        <div className="items">
          <h3 id="h3">
            Product Num-1:
            <input
              id="product_1_Name"
              onChange={this.setDataFromInputs}
              maxLength="10"
              type="text"
              placeholder="Name"
            />
            <input
              id="product_1_Price"
              onChange={this.setDataFromInputs}
              maxLength="6"
              type="text"
              placeholder="Price"
            />
            <button
              onClick={() =>
                this.props.pData(
                  this.state.product_1_Name,
                  this.state.product_1_Price
                )
              }
              className="add"
            >
              +
            </button>
          </h3>
        </div>

        <div className="items">
          <h3 id="h3">
            Product Num-2:
            <input
              id="product_2_Name"
              onChange={this.setDataFromInputs}
              maxLength="10"
              type="text"
              placeholder="Name"
            />
            <input
              id="product_2_Price"
              onChange={this.setDataFromInputs}
              maxLength="6"
              type="text"
              placeholder="Price"
            />
            <button
              onClick={() =>
                this.props.pData(
                  this.state.product_2_Name,
                  this.state.product_2_Price
                )
              }
              className="add"
            >
              +
            </button>
          </h3>
        </div>

        <div className="items">
          <h3 id="h3">
            Product Num-3:
            <input
              id="product_3_Name"
              onChange={this.setDataFromInputs}
              maxLength="10"
              type="text"
              placeholder="Name"
            />
            <input
              id="product_3_Price"
              onChange={this.setDataFromInputs}
              maxLength="6"
              type="text"
              placeholder="Price"
            />
            <button
              onClick={() =>
                this.props.pData(
                  this.state.product_3_Name,
                  this.state.product_3_Price
                )
              }
              className="add"
            >
              +
            </button>
          </h3>
        </div>
        <div className="items">
          <h3 id="h3">
            Product Num-4:
            <input
              id="product_4_Name"
              onChange={this.setDataFromInputs}
              maxLength="10"
              type="text"
              placeholder="Name"
            />
            <input
              id="product_4_Price"
              onChange={this.setDataFromInputs}
              maxLength="6"
              type="text"
              placeholder="Price"
            />
            <button
              onClick={() =>
                this.props.pData(
                  this.state.product_4_Name,
                  this.state.product_4_Price
                )
              }
              className="add"
            >
              +
            </button>
          </h3>
          <div />
        </div>
      </div>
    );
  }
}
