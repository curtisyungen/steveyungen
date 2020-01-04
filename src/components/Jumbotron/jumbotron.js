import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="jumbotron"
        style={{
          background: this.props.background,
          backgroundImage: `url(${this.props.image}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
