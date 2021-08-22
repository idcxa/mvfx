import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { SRLWrapper } from "simple-react-lightbox";

const SRLOptions = {
  settings: {
    overlayColor: "rgb(0, 0, 0)",
    autoplaySpeed: 5000,
    transitionSpeed: 4000,
    slideAnimationType: 'fade',
    slideTransitionSpeed: 0,
    lightboxTransitionSpeed: 0,
  },
  buttons: {
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
};

export default function App() {
  return(
    <div>
      <SRLWrapper options={SRLOptions}>
        <Gallery photos={photos} />
      </SRLWrapper>
    </div>
  );
}
