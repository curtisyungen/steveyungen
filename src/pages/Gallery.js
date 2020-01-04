import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import { aboutGallery } from "../content/text";
import ZeroAndSlicks from "../images/zero-and-the-slicks.jpg";
import GenericBand1 from "../images/the-generic-band.jpg";
import GenericBand2 from "../images/the-generic-band-1986.jpg";
import GenericBand3 from "../images/red-shirt-band.jpg";
import LeiAloha from "../images/the-lei-aloha-serenaders.jpg";
import TurksSteve from "../images/steve-turks.jpg";
import GrandSteve from "../images/steve-grand-canyon-guitar.jpg";
import LapSteve from "../images/lap-steve.jpg";
import AlohaSteve from "../images/aloha-friday-steve.jpg";

const photoStyle = {
  maxHeight: "100%",
  maxWidth: "100%"
};

class Gallery extends Component {
  render() {
    return (
      <div className="container gallery-container">
        <div className="row row-style justify-content-center text-center aboutMusic">
          <p className="title large-title">GALLERY</p>
          <p className="description">{aboutGallery}</p>
          <div className="spacer"></div>
        </div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-8">
            <Photo image={ZeroAndSlicks} style={photoStyle} />
          </div>
        </div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-4">
            <Photo image={GenericBand1} style={photoStyle} />
          </div>
          <div className="col-md-4">
            <Photo image={GenericBand2} style={photoStyle} />
          </div>
          <div className="col-md-4">
            <Photo image={GenericBand3} style={photoStyle} />
          </div>
        </div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-6">
            <Photo image={LeiAloha} style={photoStyle} />
          </div>
          <div className="col-md-6">
            <Photo image={TurksSteve} style={photoStyle} />
          </div>
        </div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-4">
            <Photo image={GrandSteve} style={photoStyle} />
          </div>
          <div className="col-md-4">
            <Photo image={LapSteve} style={photoStyle} />
          </div>
        </div>
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-8">
            <Photo image={AlohaSteve} style={photoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
