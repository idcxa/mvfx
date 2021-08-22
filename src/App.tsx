import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { SRLWrapper } from "simple-react-lightbox";

export default function App() {
  return(
    <SRLWrapper>
      <Gallery photos={photos} />
    </SRLWrapper>
  );
}
