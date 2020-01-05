import React, { Component } from "react";
import PatreonBtn from "../PatreonBtn/patreonBtn";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.children}
        <PatreonBtn />
      </div>
    );
  }
}

export default Jumbotron;
