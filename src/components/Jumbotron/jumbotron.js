import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return <div className="jumbotron fadeIn-3">{this.props.children}</div>;
  }
}

export default Jumbotron;
