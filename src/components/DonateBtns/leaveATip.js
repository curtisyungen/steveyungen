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

    let displayClass = `d-${pathname !== "/tipJar" ? "block" : "none"}`;
    let btnTypeClass =
      pathname !== "/music" && pathname !== "/contact"
        ? "btn-outline-light"
        : "btn-light";

    return (
      <a
        className={`${displayClass} donateBtn db-${source} btn ${btnTypeClass}`}
        href="/tipJar"
      >
        Show Your Support
      </a>
    );
  }
}

export default LeaveATip;
