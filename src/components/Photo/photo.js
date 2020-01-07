import React, { Component, Fragment } from "react";
import Modal from "react-responsive-modal";
import "./photo.css";

const modalStyle = {
  paddingTop: "30px",
  maxHeight: "65vh",
  maxWidth: "100%"
};

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      modalImage: null,
      title: null,
      description: null
    };
  }

  componentDidMount = () => {
    const { title, description, image } = this.props;
    this.setState({
      modalImage: image,
      title,
      description
    });
  };

  openModal = () => {
    if (!this.props.hasModal) {
      return;
    }

    this.setState({
      openModal: !this.state.openModal
    });
  };

  scrollToImage = direction => {
    let { scrollableImages } = this.props;
    let { modalImage } = this.state;
    let imageArr = [];
    let currIdx = 0;

    for (var i in scrollableImages) {
      if (scrollableImages[i].image === modalImage) {
        currIdx = imageArr.length;
      }

      imageArr.push(scrollableImages[i]);
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
    const { image, hasModal, link, target, caption } = this.props;
    const { openModal, modalImage, title, description } = this.state;

    return (
      <Fragment>
        <a
          href={link}
          className={`photo fadeIn-fast modal-${hasModal}`}
          target={target}
        >
          <img
            src={image}
            style={this.props.style}
            alt="alt title"
            onClick={this.openModal}
          />
          <p className="caption">{caption}</p>
          {!hasModal ? (
            <>
              <p className="title">{title}</p>
              <p className="description">{description}</p>
            </>
          ) : (
            <></>
          )}
        </a>

        <Modal open={openModal} onClose={this.openModal}>
          <div className="modal-photo-section">
            <img
              src={modalImage}
              style={modalStyle}
              alt="alt title"
              onClick={this.openModal}
            />
            <p className="title">{title}</p>
            <p className="description">{description}</p>
          </div>

          {this.props.scrollableImages ? (
            <div className="modalScrollBtns">
              <div
                className="modalScroll"
                onClick={this.scrollToImage.bind(this, -1)}
              >
                PREV
              </div>
              <div
                className="modalScroll"
                onClick={this.scrollToImage.bind(this, 1)}
              >
                NEXT
              </div>
            </div>
          ) : (
            <></>
          )}
        </Modal>
      </Fragment>
    );
  }
}

export default Photo;
