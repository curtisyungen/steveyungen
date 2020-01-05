import React, { Component } from "react";
import "./donateBtns.css";

class LeaveATip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: null
    };
  }
  componentDidMount = () => {
    this.setState({
      pathname: window.location.pathname
    });
  };

  render() {
    const { source } = this.props;
    const { pathname } = this.state;
    return (
      <div
        className={`d-${
          pathname !== "/tipJar" ? "block" : "none"
        } donateBtn db-${source} btn btn-dark btn-sm`}
      >
        <a href="/tipJar">Leave a Tip</a>
      </div>
    );
  }
}

export default LeaveATip;
