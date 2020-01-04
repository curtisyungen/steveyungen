import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="jumbotron"
        style={{
          background: this.props.background,
          backgroundImage: `url(${this.props.image}`
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
