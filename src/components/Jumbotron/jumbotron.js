import React, { Component } from "react";
import DonateBtns from "../DonateBtns/donateBtns";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.children}
        <DonateBtns source={"jumbotron"} />
      </div>
    );
  }
}

export default Jumbotron;
