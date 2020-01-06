import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import "./footer.css";

class Footer extends Component {
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
    const { pathname } = this.state;
    return (
      <div
        className={`page-footer text-center footer ${
          pathname !== "/contact" ? "mt-3" : "mt-0"
        }`}
      >
        <div className="footer-inner">
          <h5>Footer</h5>
        </div>
        <ScrollTop />
      </div>
    );
  }
}

export default Footer;
