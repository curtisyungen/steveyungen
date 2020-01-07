import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import alohaFriday from "../images/events/Aloha-Friday-SJY-11-17-2017.jpg";
import sosaPoster from "../images/events/sosa-poster.jpg";
import rollingStone from "../images/events/rolling-stone.jpg";
import SteveSOSACutOut from "../images/steve/steve-sosa-cutout-remove-logo.png";
import "./Events.css";

const upcomingEvents = [];
const pastEvents = [alohaFriday, sosaPoster, rollingStone];

const photoStyle = {
  marginBottom: "10px",
  maxHeight: "350px",
  maxWidth: "100%"
};

const cutoutStyle = {
  bottom: "0",
  left: "0",
  position: "absolute",
  zIndex: "-1"
};

class Events extends Component {
  render() {
    return (
      <div className="container events-container">
        <div className="row justify-content-center text-center m-0">
          <p className="title large-title pb-4">UPCOMING EVENTS</p>
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => (
              <div key={event} className="col-xs-8 col-md-2">
                <Photo image={event} style={photoStyle} hasModal />
              </div>
            ))
          ) : (
            <p className="description">
              Send Steve a message to hear about upcoming events.
            </p>
          )}
        </div>
        <div className="spacer" />

        <div className="row justify-content-center text-center m-0">
          <p className="title large-title pb-4">PAST EVENTS</p>
          {pastEvents.map(event => (
            <div key={event} className="col-xs-8 col-md-2">
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
