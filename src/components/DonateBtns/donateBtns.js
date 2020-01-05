import React, { Component } from "react";
import "./donateBtns.css";

const PATREON_ID = "25089557";
const PAYPAL_BIZ_ID = "NAY72ENRLHF6L";

class DonateBtns extends Component {
  render() {
    return (
      <div className="donateBtns">
        <div className="donateBtn patreonBtn btn btn-dark btn-sm">
          <a
            href={`https://www.patreon.com/bePatron?u=${PATREON_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Patreon
          </a>
        </div>
        <div className="donateBtn payPalBtn btn btn-dark btn-sm">
          <a
            href={`https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${PAYPAL_BIZ_ID}&currency_code=USD&source=url`}
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal
          </a>
        </div>
      </div>
    );
  }
}

export default DonateBtns;
