import React, { Component } from "react";
import "./donateBtns.css";

class LeaveATip extends Component {
  render() {
    const { source } = this.props;
    return (
      <div className={`donateBtn patreonBtn db-${source} btn btn-dark btn-sm`}>
        <a href="/tipJar">Leave a Tip</a>
      </div>
    );
  }
}

export default LeaveATip;
