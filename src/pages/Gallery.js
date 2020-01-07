import React, { Component } from "react";
import Photo from "../components/Photo/photo";
import Video from "../components/Video/video";
import { aboutGallery } from "../content/text";
import { galleryImages } from "../content/images";

const photoStyle = {
  cursor: "pointer",
  marginTop: "10px",
  maxHeight: "400px",
  maxWidth: "100%"
};

class Gallery extends Component {
  render() {
    return (
      <div className="container gallery-container">
        {/* PHOTOS */}
        <div className="row row-style justify-content-center text-center">
          <p className="title large-title">PHOTOS</p>
          <p className="description">{aboutGallery}</p>
          <div className="spacer" />
        </div>

        <div className="row justify-content-center text-center m-3">
          {Object.keys(galleryImages).map(image => (
            <div key={image} className="col-sm-8 col-md-4 col-xl-2">
              <Photo
                image={galleryImages[image].image}
                title={galleryImages[image].title}
                description={galleryImages[image].description}
                style={photoStyle}
                hasModal
                scrollableImages={galleryImages}
              />
            </div>
          ))}
        </div>

        {/* VIDEOS */}
        <div className="row row-style justify-content-center text-center mt-5 mb-4">
          <div className="spacer" />
          <p className="title large-title">VIDEOS</p>
          <div className="spacer" />
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
