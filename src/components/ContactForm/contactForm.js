import React, { Component } from "react";

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
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTaiBeX6hte9tcpIHydbxaKqKPOgGVa8HSX9BYmUYrOLLtWg/formResponse"
        target="_self"
        method="POST"
        id="mG61Hd"
      >
        <p>Your Name</p>
        <input
          name="entry.1919979108"
          type="text"
          defaultValue={name}
          onChange={this.handleInputChange}
        />
        <p>Your Email</p>
        <input
          name="entry.1805927419"
          type="text"
          defaultValue={email}
          onChange={this.handleInputChange}
        />
        <p>Your Mesage</p>
        <textarea
          name="entry.1620027203"
          rows="1"
          defaultValue={message}
          onChange={this.handleInputChange}
        ></textarea>
        <br />
        <input class="button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
