import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import SteveSOSACutOut from "../images/steve/steve-sosa-cutout.png";
import "./Contact.css";

const photoStyle = {
  bottom: "0",
  left: "0",
  maxHeight: "75%",
  position: "absolute"
};

class Contact extends Component {
  render() {
    return (
      <div className="container contact-container">
        <div className="row row-style justify-content-center text-center">
          <a href="mailto:syungen@yahoo.com">syungen@yahoo.com</a>
        </div>

        <div className="contact">
          <div className="steve-sosa-cutout">
            <Photo image={SteveSOSACutOut} style={photoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
