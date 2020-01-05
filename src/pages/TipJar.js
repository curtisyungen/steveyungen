import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import DonateBtns from "../components/DonateBtns/donateBtns";
import tipJarImg from "../images/tip-jar.jpg";
import "./TipJar.css";

class TipJar extends Component {
  render() {
    return (
      <div className="tipJar">
        <Photo
          image={tipJarImg}
          title="Tip Jar"
          description="Tips are very much appreciated!"
        />
        <DonateBtns source="tipJar" />
      </div>
    );
  }
}

export default TipJar;
