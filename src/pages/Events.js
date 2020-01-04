import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import alohaFriday from "../images/Aloha-Friday-SJY-11-17-2017.jpg";

class Events extends Component {
  render() {
    return (
      <div>
        <Photo image={alohaFriday} />
      </div>
    );
  }
}

export default Events;
