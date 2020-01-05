import React, { Component } from "react";
import "./patreonBtn.css";

class PatreonBtn extends Component {
  render() {
    return (
      <div className="patreonBtn btn btn-dark btn-sm">
        <a
          href="https://www.patreon.com/bePatron?u=25089557"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support on Patreon
        </a>
      </div>
    );
  }
}

export default PatreonBtn;
