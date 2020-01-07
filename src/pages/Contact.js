import React, { Component } from "react";
import ContactForm from "../components/ContactForm/contactForm";
import "./Contact.css";

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
          <div className="justify-content-center text-center contactTitle">
            <p className="title large-title">CONTACT STEVE</p>
          </div>

          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
