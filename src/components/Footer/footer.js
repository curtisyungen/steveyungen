import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import SocialIcons from "../SocialIcons/socialIcons";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className={`page-footer text-center footer`}>
        <div className="footer-inner">
          <h5>Footer</h5>
        </div>
        <SocialIcons />
        <ScrollTop />
      </div>
    );
  }
}

export default Footer;
