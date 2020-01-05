import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return <div className="jumbotron">{this.props.children}</div>;
  }
}

export default Jumbotron;
