import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import MusicImage from "../images/steve-turks.jpg";
import EventsImage from "../images/Aloha-Friday-SJY-11-17-2017.jpg";
import GalleryImage from "../images/steve-1979.jpg";
import SoundCloudLogo from "../images/soundcloud.svg";
import YouTubeLogo from "../images/youtube.svg";
import FacebookLogo from "../images/facebook.svg";
import "./Home.css";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

const logoStyle = {
  cursor: "pointer",
  marginTop: "35px",
  maxHeight: "80px",
  maxWidth: "100%"
};

class Home extends Component {
  render() {
    return (
      <div className="container home-container">
        <div className="row my-row justify-content-center text-center">
          <div className="spacer" />
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
          <div className="spacer" />
          <p className="col-md-12 title">FIND STEVE ONLINE</p>
          <div className="col-md-4">
            <Photo
              image={SoundCloudLogo}
              style={logoStyle}
              link="https://soundcloud.com/steve-yungen"
              target="_blank"
            />
          </div>
          <div className="col-md-4">
            <Photo
              image={YouTubeLogo}
              style={logoStyle}
              link="https://www.youtube.com/user/sugarbeet56"
              target="_blank"
            />
          </div>
          <div className="col-md-4">
            <Photo
              image={FacebookLogo}
              style={logoStyle}
              link="https://www.facebook.com/steve.yungen"
              target="_blank"
            />
          </div>
        </div>

        <div className="row my-row justify-content-center text-center">
          <div className="col-md-12">Row 3 Col 1</div>
        </div>
      </div>
    );
  }
}

export default Home;
