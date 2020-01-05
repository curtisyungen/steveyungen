import React, { Component } from "react";
import "./donateBtns.css";

class PayPalBtn extends Component {
  render() {
    return (
      <div className="donateBtn payPalBtn btn btn-dark btn-sm">
        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=NAY72ENRLHF6L&currency_code=USD&source=url"
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal
        </a>
      </div>
    );
  }
}

export default PayPalBtn;
