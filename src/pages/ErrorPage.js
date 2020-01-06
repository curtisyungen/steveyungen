import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import BassFace from "../images/steve/steve-bass-face.jpg";

class ErrorPage extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="spacer" />
        <Photo
          image={BassFace}
          title="Page Not Found."
          description="Sorry, we're not seeing this page in our directory. Click the image to go Home."
          link="/home"
        />
        <div className="spacer" />
      </div>
    );
  }
}

export default ErrorPage;
