import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import DonateBtns from "../components/DonateBtns/donateBtns";
import tipJarImg from "../images/tip-jar.jpg";

const photoStyle = {
  border: "1px solid black",
  marginTop: "20px",
  maxHeight: "auto",
  maxWidth: "100%"
};

class TipJar extends Component {
  render() {
    return (
      <div className="container tipJar-container fadeIn-fast">
        <div className="col-xs-12 text-center">
          <p className="title">Leave a Tip</p>
          <DonateBtns source="tipJar" />
        </div>
        <br />
        <div className="row row-style justify-content-center text-center">
          <div className="col-xs-12 col-md-4">
            <Photo image={tipJarImg} style={photoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default TipJar;
