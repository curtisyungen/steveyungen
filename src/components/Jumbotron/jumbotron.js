import React, { Component } from "react";
import PatreonBtn from "../DonateBtns/patreonBtn";
import PayPalBtn from "../DonateBtns/paypalBtn";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.children}
        <PatreonBtn />
        <PayPalBtn />
      </div>
    );
  }
}

export default Jumbotron;
