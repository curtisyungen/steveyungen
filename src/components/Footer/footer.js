import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import DonateBtns from "../DonateBtns/donateBtns";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer text-center footer mt-3">
        <div className="footer-inner">
          <h5>Footer</h5>
        </div>
        <DonateBtns source="footer" />
        <ScrollTop />
      </div>
    );
  }
}

export default Footer;
