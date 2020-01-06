import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import alohaFriday from "../images/events/Aloha-Friday-SJY-11-17-2017.jpg";
import sosaPoster from "../images/events/sosa-poster.jpg";

const eventPhotos = [alohaFriday, sosaPoster];

const photoStyle = {
  maxHeight: "400px",
  maxWidth: "100%"
};

class Events extends Component {
  render() {
    return (
      <div className="container events-container">
        <div className="row row-style justify-content-center text-center">
          {eventPhotos.map(event => (
            <Photo image={event} style={photoStyle} />
          ))}
        </div>
      </div>
    );
  }
}

export default Events;
