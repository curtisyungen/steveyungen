import React, { Component } from "react";
import LeaveATip from "../DonateBtns/leaveATip";
import "./jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.children}
        <LeaveATip source="jumbotron" />
      </div>
    );
  }
}

export default Jumbotron;
