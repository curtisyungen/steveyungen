import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./scrollTop.css";

library.add(faArrowCircleUp);

class ScrollTop extends Component {
  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="scrollTop" onClick={this.scrollToTop}>
        <FontAwesomeIcon icon={faArrowCircleUp} className="fa-3x arrowUp" />
      </div>
    );
  }
}

export default ScrollTop;
