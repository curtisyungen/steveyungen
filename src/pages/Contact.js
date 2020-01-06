import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import SteveSOSACutOut from "../images/steve/steve-sosa-cutout.png";
import "./Contact.css";

const photoStyle = {
  bottom: "0",
  left: "0",
  maxHeight: "75%",
  position: "absolute",
  zIndex: "-1"
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container contact-container">
        <div className="contact">
          <div className="justify-content-center text-center aboutMusic">
            <p className="title large-title">CONTACT STEVE</p>
            <div className="spacer"></div>
          </div>

          {/* <div className="justify-content-center text-center">
          <a href="mailto:syungen@yahoo.com">syungen@yahoo.com</a>
        </div> */}

          <form
            className="contactForm"
            method="POST"
            action="/submitContactForm"
          >
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Your name"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="Your email"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="messageInput"
                placeholder="Your message"
                onChange={this.handleInputChange}
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="steve-sosa-cutout">
            <Photo image={SteveSOSACutOut} style={photoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
