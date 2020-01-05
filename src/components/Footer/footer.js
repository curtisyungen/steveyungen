import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import LeaveATip from "../DonateBtns/leaveATip";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="page-footer text-center footer mt-3">
        <div className="footer-inner">
          <h5>Footer</h5>
        </div>
        <LeaveATip source="footer" />
        <ScrollTop />
      </div>
    );
  }
}

export default Footer;
