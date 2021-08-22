import { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "./Home.scss";

export function Images(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <Gallery photos={props.images} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

export default function App() {
  var pimage = {
    backgroundImage: "url('https://source.unsplash.com/2ShvY8Lf6l0/800x599')",
  };
  return (
    <div className="page parallax">
      <div className="parallax__layer--base">
        <div className="text">
          <div className="gallery">
            <h1>WELCOME TO M_VFX</h1>
            <h2>High-End Product Visualisation on Demand</h2>
            <p>
              I'm a CGI artist that specialises in product visualisation, and
              VFX, my goal is to bring your 3d models to life in stunning
              detail, as 3d visualisation is a great way to create unique
              pictures or footage of your product in a cost effective way. ​ I
              use advanced rendering software, powered by state of the art PCs
              to produce convincing, high fidelity visuals and able to handle
              large and complex scenes, so I can be more productive, turning
              around projects at a much faster rate.
            </p>
          </div>
          <Images images={photos} />
        </div>
      </div>
      <div class="parallax__layer parallax__layer--back img1">
        <img src="/room3.jpg" alt="high-quality render" />
      </div>
      <div className="parallax__layer--base">
        <div className="text">
          <h1>WELCOME TO M_VFX</h1>
          <h2>High-End Product Visualisation on Demand</h2>
          <p>
            I'm a CGI artist that specialises in product visualisation, and VFX,
            my goal is to bring your 3d models to life in stunning detail, as 3d
            visualisation is a great way to create unique pictures or footage of
            your product in a cost effective way. ​ I use advanced rendering
            software, powered by state of the art PCs to produce convincing,
            high fidelity visuals and able to handle large and complex scenes,
            so I can be more productive, turning around projects at a much
            faster rate.
          </p>
        </div>
      </div>
    </div>
  );
}
