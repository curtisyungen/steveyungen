import React, { Component } from "react";
import "./contactForm.css";

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

    if (name === "entry.1919979108") {
      userName = value;
    }

    if (name === "entry.1805927419") {
      email = value;
    }

    if (name === "entry.1620027203") {
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
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTaiBeX6hte9tcpIHydbxaKqKPOgGVa8HSX9BYmUYrOLLtWg/formResponse"
          target="_self"
          method="POST"
          id="mG61Hd"
        >
          <div className="form-field">
            <label>Name *</label>
            <input
              className="contactInput"
              name="entry.1919979108"
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
              name="entry.1805927419"
              type="email"
              defaultValue={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Message *</label>
            <textarea
              className="contactInput"
              name="entry.1620027203"
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
