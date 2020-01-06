import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import alohaFriday from "../images/steve/Aloha-Friday-SJY-11-17-2017.jpg";

class Events extends Component {
  render() {
    return (
      <div className="container events-container">
        <div className="row row-style justify-content-center text-center">
          <Photo image={alohaFriday} />
        </div>
      </div>
    );
  }
}

export default Events;
