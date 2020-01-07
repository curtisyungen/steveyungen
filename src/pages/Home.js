import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import Logo from "../components/Logo/logo";
import MusicImage from "../images/steve/steve-crater-lake.jpg";
import EventsImage from "../images/events/Aloha-Friday-SJY-11-17-2017.jpg";
import GalleryImage from "../images/steve/steve-1979.jpg";
import SoundCloudLogo from "../images/logos/soundcloud.svg";
import YouTubeLogo from "../images/logos/youtube.svg";
import FacebookLogo from "../images/logos/facebook.svg";
import steveCleveland from "../images/steve/steve-cleveland.jpg";
import "./Home.css";

const photoStyle = {
  border: "1px solid black",
  cursor: "pointer",
  maxHeight: "400px",
  maxWidth: "100%"
};

const logoStyle = {
  cursor: "pointer",
  marginTop: "35px",
  maxHeight: "80px",
  maxWidth: "100%"
};

const clevelandStyle = {
  border: "1px solid black",
  maxHeight: "700px",
  maxWidth: "100%"
};

class Home extends Component {
  componentDidMount = () => {
    let admin = window.location.pathname.split("/")[2];
    console.log(admin);
  };

  render() {
    return (
      <div className="container home-container">
        {/* ABOUT */}
        <div className="row text-center">
          <p className="title">ABOUT STEVE</p>
          <p className="description text-left">
            My name is Steve Yungen and I live in Central Point, Oregon. I like
            to write songs, sing and play guitar, bass and lapsteel. My favorite
            types of music are Hawaiian Slack Key guitar, Rock’n’Roll, and I
            also enjoy gospel and choral music.
          </p>
          <p className="description text-left">
            I’ve played music for many years and started my first band in high
            school called “Zero and the Slicks”, which focused on doo-wop and
            car-tragedy love songs. I later played with the Generic Band, which
            entered and won the state True Value Showdown in 1986. I began
            playing Hawaiian Slack Key guitar styles, which led to playing bass
            guitar in the Lei Aloha Serenaders, a hula dance band that played
            for hula dancers in Halau Hula Na Pua O Hawaii Nei. Most recently,
            I’ve become interested and involved in songwriting and recording,
            and I am active in the Southern Oregon Songwriters Association.
          </p>
          <p className="description text-left">
            I’m a good sideman and can play several instruments and many styles.
            I play well with others, and am also available for solo
            performances.
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="row row-style justify-content-center text-center">
          <div className="col-sm-12 spacer" />
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
          <div className="col-sm-12 spacer" />
        </div>

        {/* SOCIAL MEDIA */}
        <div className="row row-style justify-content-center text-center">
          <div className="spacer" />
          <p className="col-md-12 title">FIND STEVE ONLINE</p>
          <div className="col-xs-4 col-md-2">
            <Logo
              image={SoundCloudLogo}
              style={logoStyle}
              link="https://soundcloud.com/steve-yungen"
              target="_blank"
            />
          </div>
          <div className="col-xs-4 col-md-2">
            <Logo
              image={YouTubeLogo}
              style={logoStyle}
              link="https://www.youtube.com/user/sugarbeet56/videos"
              target="_blank"
            />
          </div>
          <div className="col-xs-4 col-md-2">
            <Logo
              image={FacebookLogo}
              style={logoStyle}
              link="https://www.facebook.com/steve.yungen"
              target="_blank"
            />
          </div>
          <div className="col-sm-12 spacer" />
        </div>

        <hr />

        <div className="row row-style justify-content-center text-center">
          <div className="col-sm-12 spacer" />
          <div className="col-md-12">
            <Photo
              image={steveCleveland}
              style={clevelandStyle}
              caption="Cleveland 2016"
            />
          </div>
          <div className="col-sm-12 spacer-small" />
        </div>
      </div>
    );
  }
}

export default Home;
