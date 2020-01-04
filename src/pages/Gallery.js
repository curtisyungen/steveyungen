import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import Video from "../components/Video/video";
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
import Modal from "react-responsive-modal";
import Steve1986 from "../images/steve-1986.jpg";
import SteveBand from "../images/steve-band.jpg";
import SteveGreg from "../images/steve-greg.jpg";
import StevePili from "../images/steve-pili.jpg";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

const modalStyle = {
  maxHeight: "100%",
  maxWidth: "100%"
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      modalImage: null
    };
  }

  openModal = modalImage => {
    this.setState({
      openModal: true,
      modalImage
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { openModal, modalImage } = this.state;
    return (
      <div className="container gallery-container">
        {/* PHOTOS */}
        <div className="row row-style justify-content-center text-center aboutMusic">
          <p className="title large-title">PHOTOS</p>
          <p className="description">{aboutGallery}</p>
          <div className="spacer"></div>
        </div>

        {/* ROW 1 */}
        <div className="row row-style justify-content-center text-center">
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, ZeroAndSlicks)}
          >
            <Photo image={ZeroAndSlicks} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, GenericBand1)}
          >
            <Photo image={GenericBand1} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, GenericBand2)}
          >
            <Photo image={GenericBand2} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, GenericBand3)}
          >
            <Photo image={GenericBand3} style={photoStyle} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row row-style justify-content-center text-center">
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, StevePili)}
          >
            <Photo image={StevePili} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, LeiAloha)}
          >
            <Photo image={LeiAloha} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, TurksSteve)}
          >
            <Photo image={TurksSteve} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, SteveGreg)}
          >
            <Photo image={SteveGreg} style={photoStyle} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row row-style justify-content-center text-center">
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, Steve1986)}
          >
            <Photo image={Steve1986} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, GrandSteve)}
          >
            <Photo image={GrandSteve} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, LapSteve)}
          >
            <Photo image={LapSteve} style={photoStyle} />
          </div>
          <div
            className="col-sm-4 col-md-2"
            onClick={this.openModal.bind(this, AlohaSteve)}
          >
            <Photo image={AlohaSteve} style={photoStyle} />
          </div>
        </div>

        <Modal open={openModal} onClose={this.closeModal}>
          <Photo image={modalImage} style={modalStyle} />
        </Modal>

        {/* VIDEOS */}
        <div className="row row-style justify-content-center text-center aboutMusic">
          <div className="spacer"></div>
          <p className="title large-title">VIDEOS</p>
          <div className="spacer"></div>
        </div>

        {/* ROW 1 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/xEYHfnU0Z9o"} />
          </div>
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/tgwyTx6I6sY"} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/P3s9dW91KB4"} />
          </div>
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/dphpd_m3cj0"} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/P4to7YpbM4k"} />
          </div>
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/pd9kunqRBQ8"} />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/dFu8YgKDRJY"} />
          </div>
          <div className="col-md-8 col-xl-4">
            <Video video={"https://www.youtube.com/embed/vmlbEtXN-DQ"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
