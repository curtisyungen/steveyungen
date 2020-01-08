import React, { Component } from "react";
import ScrollTop from "../ScrollTop/scrollTop";
import SocialIcons from "../SocialIcons/socialIcons";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className={`page-footer text-center footer`}>
        <div className="footer-inner">
          <SocialIcons />
          <ScrollTop />
          <div className="copyright">
            <p>Cover photo by Karen Irmscher.</p>
            <p>Copyright &copy; 2020 Steve Yungen. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
