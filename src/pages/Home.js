import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import MusicImage from "../images/steve-turks.jpg";
import EventsImage from "../images/Aloha-Friday-SJY-11-17-2017.jpg";
import GalleryImage from "../images/steve-1979.jpg";
import "./Home.css";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

class Home extends Component {
  render() {
    return (
      <div className="container home-container">
        <div className="row my-row justify-content-center text-center">
          {/* Music */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/music"}
              image={MusicImage}
              style={photoStyle}
              title={"MUSIC"}
              description={"Music composed by Steve Yungen."}
            />
          </div>
          {/* Events */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/events"}
              image={EventsImage}
              style={photoStyle}
              title={"EVENTS"}
              description={"Past and upcoming events featuring Steve."}
            />
          </div>
          {/* Gallery */}
          <div className="col-sm-12 col-md-4">
            <Photo
              link={"/gallery"}
              image={GalleryImage}
              style={photoStyle}
              title={"GALLERY"}
              description={"About Steve and his music."}
            />
          </div>
        </div>

        <div className="row my-row justify-content-center text-center">
          <div className="col-md-12">Row 2 Col 1</div>
        </div>

        <div className="row my-row justify-content-center text-center">
          <div className="col-md-12">Row 3 Col 1</div>
        </div>
      </div>
    );
  }
}

export default Home;
