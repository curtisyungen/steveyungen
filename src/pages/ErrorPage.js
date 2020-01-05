import React, { Component } from "react";

const errorStyle = {
  height: "50vh",
  minHeight: "100%"
};

class ErrorPage extends Component {
  render() {
    return (
      <div className="errorPage" style={errorStyle}>
        Page not found.
      </div>
    );
  }
}

export default ErrorPage;
