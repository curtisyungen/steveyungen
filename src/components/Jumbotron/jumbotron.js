import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: null
    };
  }

  componentDidMount = () => {
    let pathname = window.location.pathname.split("/")[1];
    this.setState({
      pathname
    });
  };

  render() {
    const { pathname } = this.state;
    return (
      <div className={`jumbotron jumbotron-${pathname}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
