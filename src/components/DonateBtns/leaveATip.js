import React, { Component } from "react";
import "./donateBtns.css";
import { withRouter } from "react-router-dom";

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
      <a
        className={`d-${
          pathname !== "/tipJar" ? "block" : "none"
        } donateBtn db-${source} 
        btn btn-outline-light btn-sm`}
        href="/tipJar"
      >
        Leave a Tip
      </a>
    );
  }
}

export default LeaveATip;
