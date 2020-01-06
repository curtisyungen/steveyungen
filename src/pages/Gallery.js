import React, { Component } from "react";
import Modal from "react-responsive-modal";
import Photo from "../components/Photo/photo";
import Video from "../components/Video/video";
import { aboutGallery } from "../content/text";
import { galleryImages } from "../content/images";
import "./Gallery.css";

const photoStyle = {
  cursor: "pointer",
  maxHeight: "400px",
  maxWidth: "100%"
};

const modalStyle = {
  paddingTop: "30px",
  maxHeight: "65vh",
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

  // direction of -1: go to previous
  // direction of 1: go to next
  scrollToImage = direction => {
    let imageArr = [];
    let { modalImage } = this.state;
    let currIdx = 0;

    for (var i in galleryImages) {
      if (galleryImages[i].image === modalImage) {
        currIdx = imageArr.length;
      }

      imageArr.push(galleryImages[i]);
    }

    if (currIdx === imageArr.length - 1 && direction === 1) {
      currIdx = -1;
    }

    if (currIdx === 0 && direction === -1) {
      currIdx = imageArr.length;
    }

    let nextImage = imageArr[currIdx + 1 * direction];

    this.setState({
      modalImage: nextImage.image,
      title: nextImage.title,
      description: nextImage.description
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
              key={image}
              className="col-sm-8 col-md-4 col-xl-2"
              onClick={this.openModal.bind(this, image)}
            >
              <Photo image={galleryImages[image].image} style={photoStyle} />
            </div>
          ))}
        </div>

        <Modal open={openModal} onClose={this.closeModal}>
          <div>
            <Photo
              image={modalImage}
              style={modalStyle}
              title={title}
              description={description}
            />
            <div className="galleryScrollBtns">
              <div
                className="galleryScroll"
                onClick={this.scrollToImage.bind(this, -1)}
              >
                PREV
              </div>
              <div
                className="galleryScroll"
                onClick={this.scrollToImage.bind(this, 1)}
              >
                NEXT
              </div>
            </div>
          </div>
        </Modal>

        {/* VIDEOS */}
        <div className="row row-style justify-content-center text-center aboutMusic">
          <div className="spacer"></div>
          <p className="title large-title">VIDEOS</p>
          <div className="spacer"></div>
        </div>

        {/* ROW 1 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/xEYHfnU0Z9o?rel=0"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/tgwyTx6I6sY"} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/P3s9dW91KB4"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/dphpd_m3cj0"} />
          </div>
        </div>

        {/* ROW 3 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/P4to7YpbM4k"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/pd9kunqRBQ8"} />
          </div>
        </div>

        {/* ROW 4 */}
        <div className="row video-row justify-content-center text-center">
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/dFu8YgKDRJY"} />
          </div>
          <div className="col-xs-8 col-md-6">
            <Video video={"https://www.youtube.com/embed/vmlbEtXN-DQ"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
