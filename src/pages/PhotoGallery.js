import React, { useState, useCallback } from "react";
import "./Gallery.css";
import Nav from "../components/Nav";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Footer from "../components/Footer";

function PhotoGallery() {
  const photos = [
    {
      src: "./hair-1.jpeg",
      width: 1,
      height: 1.5,
      key: "1"
    },
    {
      src: "./hair-2.jpeg",
      width: 1,
      height: 1,
      key: "2"
    },
    {
      src: "./hair-3.jpeg",
      width: 1,
      height: 1,
      key: "3"
    },
    {
      src: "./hair-4.jpeg",
      width: 1,
      height: 1,
      key: "4"
    },
    {
      src: "./hair-5.jpeg",
      width: 1,
      height: 1,
      key: "5"
    },
    {
      src: "./hair-6.jpeg",
      width: 1,
      height: 1,
      key: "6"
    },
    {
      src: "./hair-7.jpeg",
      width: 1,
      height: 1,
      key: "7"
    },
    {
      src: "./hair-7.jpeg",
      width: 1,
      height: 1,
      key: "8"
    },
    {
      src: "./hair-7.jpeg",
      width: 1,
      height: 1,
      key: "9"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Nav />
      <div className="image-gallery-container">
        <div className="image-gallery">
          <div className="gallery">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PhotoGallery;
