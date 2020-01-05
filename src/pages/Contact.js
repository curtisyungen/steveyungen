import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <form method="POST" action="/sendEmail">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" rows="3"></textarea>
        <input type="submit" />
      </form>
    );
  }
}

export default Contact;
