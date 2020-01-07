import React, { Component } from "react";
import "./contactForm.css";

const NAME_FIELD = "entry.1110833389";
const EMAIL_FIELD = "entry.4075683";
const MESSAGE_FIELD = "entry.1253447738";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      message: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    let { userName, email, message } = this.state;

    if (name === NAME_FIELD) {
      userName = value;
    }

    if (name === EMAIL_FIELD) {
      email = value;
    }

    if (name === MESSAGE_FIELD) {
      message = value;
    }

    this.setState({
      userName,
      email,
      message
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contactForm">
        <form
          action="https://docs.google.com/forms/u/5/d/e/1FAIpQLSfSUawAYCaQqN34TrmCYkCdSfW1aJKkZq4HyFWhh8i-W9D-UQ/formResponse"
          target="_self"
          method="POST"
          id="mG61Hd"
        >
          <div className="form-field">
            <label>Name *</label>
            <input
              className="contactInput"
              name={NAME_FIELD}
              type="text"
              defaultValue={name}
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Email *</label>
            <input
              className="contactInput"
              required
              name={EMAIL_FIELD}
              type="email"
              defaultValue={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea
              className="contactInput"
              name={MESSAGE_FIELD}
              rows="3"
              maxLength="1000"
              defaultValue={message}
              required
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <div className="form-field">
            <input
              className="btn btn-outline-dark contactSubmitBtn"
              type="submit"
              value="Submit"
              onClick={this.redirectToHome}
            />
          </div>
        </form>
        <div className="spacer" />
      </div>
    );
  }
}

export default ContactForm;
