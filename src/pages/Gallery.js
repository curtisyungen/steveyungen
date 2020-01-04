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

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

const modalStyle = {
  maxHeight: "100%",
  maxWidth: "100%"
};

const videoHeight = "315px";
const videoWidth = "560px";

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
            className="col-md-4"
            onClick={this.openModal.bind(this, ZeroAndSlicks)}
          >
            <Photo image={ZeroAndSlicks} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, GenericBand1)}
          >
            <Photo image={GenericBand1} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, GenericBand2)}
          >
            <Photo image={GenericBand2} style={photoStyle} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row row-style justify-content-center text-center">
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, GenericBand3)}
          >
            <Photo image={GenericBand3} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, LeiAloha)}
          >
            <Photo image={LeiAloha} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, TurksSteve)}
          >
            <Photo image={TurksSteve} style={photoStyle} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row row-style justify-content-center text-center">
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, GrandSteve)}
          >
            <Photo image={GrandSteve} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
            onClick={this.openModal.bind(this, LapSteve)}
          >
            <Photo image={LapSteve} style={photoStyle} />
          </div>
          <div
            className="col-md-4"
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
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/xEYHfnU0Z9o"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/tgwyTx6I6sY"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/xEYHfnU0Z9o"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/xEYHfnU0Z9o"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row row-style justify-content-center text-center">
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/xEYHfnU0Z9o"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
          <div className="col-md-4">
            <Video
              video={"https://www.youtube.com/embed/xEYHfnU0Z9o"}
              height={videoHeight}
              width={videoWidth}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
