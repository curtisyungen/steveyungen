import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faSoundcloud
} from "@fortawesome/free-brands-svg-icons";
import "./socialIcons.css";

library.add(faFacebookF, faYoutube, faSoundcloud);

class SocialIcons extends Component {
  render() {
    return (
      <div className="socialIcons">
        <div className="icon">
          <a
            className="socialIconLink"
            href="https://soundcloud.com/steve-yungen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
        </div>

        <div className="icon">
          <a
            className="socialIconLink"
            href="https://www.youtube.com/user/sugarbeet56/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="icon">
          <a
            className="socialIconLink"
            href="https://www.facebook.com/steve.yungen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="icon">
          <a
            className="socialIconLink"
            href="mailto:syungen@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialIcons;
