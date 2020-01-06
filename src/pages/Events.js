import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import alohaFriday from "../images/events/Aloha-Friday-SJY-11-17-2017.jpg";
import sosaPoster from "../images/events/sosa-poster.jpg";
import rollingStone from "../images/events/rolling-stone.jpg";
import SteveSOSACutOut from "../images/steve/steve-sosa-cutout-remove-logo.png";
import "./Events.css";

const eventPhotos = [alohaFriday, sosaPoster, rollingStone];

const photoStyle = {
  maxHeight: "300px",
  maxWidth: "100%"
};

const cutoutStyle = {
  bottom: "0",
  left: "0",
  maxHeight: "100%",
  position: "absolute",
  zIndex: "-1"
};

class Events extends Component {
  render() {
    return (
      <div className="container events-container">
        <div className="row justify-content-center text-center">
          <p className="title large-title">EVENTS</p>
        </div>

        <div className="row justify-content-center text-center mt-4">
          {eventPhotos.map(event => (
            <div key={event} className="col-xs-12 col-md-2">
              <Photo image={event} style={photoStyle} hasModal />
            </div>
          ))}
        </div>
        <div className="spacer" />

        <div className="steve-sosa-cutout">
          <Photo image={SteveSOSACutOut} style={cutoutStyle} />
        </div>
      </div>
    );
  }
}

export default Events;
