import React, { Component } from "react";
import "./donateBtns.css";

const PATREON_ID = "29073055";
const PAYPAL_BIZ_ID = "NAY72ENRLHF6L";

class DonateBtns extends Component {
  render() {
    const { source } = this.props;
    return (
      <div className={`donateBtns db-${source}`}>
        <a
          className="donateBtn patreonBtn btn btn-danger"
          href={`https://www.patreon.com/bePatron?u=${PATREON_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Patreon
        </a>
        <a
          className="donateBtn payPalBtn btn btn-warning"
          href={`https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${PAYPAL_BIZ_ID}&currency_code=USD&source=url`}
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal
        </a>
      </div>
    );
  }
}

export default DonateBtns;
