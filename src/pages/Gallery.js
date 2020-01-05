import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Photo from "../components/Photo/photo";
import Video from "../components/Video/video";
import { aboutGallery } from "../content/text";
import { galleryImages } from "../content/images";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "100%",
  maxWidth: "100%"
};

const modalStyle = {
  paddingTop: "30px",
  maxHeight: "700px",
  maxWidth: "100%"
};

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      modalImage: null,
      title: null,
      description: null
    };
  }

  openModal = modalImage => {
    this.setState({
      openModal: true,
      modalImage: galleryImages[modalImage].image,
      title: galleryImages[modalImage].title,
      description: galleryImages[modalImage].description
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false
    });
  };

  render() {
    const { openModal, modalImage, title, description } = this.state;
    return (
      <div className="container gallery-container">
        {/* PHOTOS */}
        <div className="row row-style justify-content-center text-center aboutMusic">
          <p className="title large-title">PHOTOS</p>
          <p className="description">{aboutGallery}</p>
          <div className="spacer"></div>
        </div>

        <div className="row justify-content-center text-center ">
          {Object.keys(galleryImages).map(image => (
            <div
              className="col-sm-8 col-md-4 col-xl-2"
              onClick={this.openModal.bind(this, image)}
            >
              <Photo image={galleryImages[image].image} style={photoStyle} />
            </div>
          ))}
        </div>

        <Modal open={openModal} onClose={this.closeModal}>
          <Photo
            image={modalImage}
            style={modalStyle}
            title={title}
            description={description}
          />
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
            <Video video={"https://www.youtube.com/embed/xEYHfnU0Z9o?rel=0"} />
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
