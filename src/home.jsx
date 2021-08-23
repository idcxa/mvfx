import { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from './components/photos'
import './css/home.scss'

export function Images(props) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
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
  )
}

export default function App() {
  var pimage = {
    backgroundImage: "url('https://source.unsplash.com/2ShvY8Lf6l0/800x599')",
  }
  return (
    <div className='page parallax'>
      <div className='parallax__layer--base'>
        <div className='text'>
          <h1>WELCOME TO M_VFX</h1>
          <h2>High-End Product Visualisation on Demand</h2>
          <p>
            James Moss is a CGI artist that specialises in product visualisation
            and VFX, whose goal is to bring your 3d models to life in stunning
            detail, as 3d visualisation is a great way, creating unique pictures
            or footage of your product in a cost effective way. ​ Using advanced
            rendering software, powered by state of the art PCs to produce
            convincing, high fidelity visuals and the ablity to handle large and
            complex scenes, your product will be built in a productive, high
            quality and rapid development environment.
          </p>
        </div>
        <div className='gallery'>
          <Images images={photos} />
        </div>
        <div className='text-flex'>
          <img src='/logo.webp' alt='high-quality render' />
          <div>
            <h1>James Moss, CEO and lead designer</h1>
            <p>
              As a CGI artist, being passionate and motivated about my work is
              important. It's what has lead me to a number of incredible
              projects and roles over the past 15 years, having gained a good
              amount of experience, I hope to use those skills to provide a
              service tailored to your 3d needs. I love the personal challenges
              a new project provides and I relish the opportunity to develop a
              new technique or skill
            </p>
          </div>
        </div>
      </div>
      <div class='parallax__group'>
        <div class='parallax__layer parallax__layer--back'>
          <img
            src='https://static.wixstatic.com/media/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.jpg/v1/fill/w_780,h_780,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.webp'
            alt='high-quality render'
          />
        </div>
        <div class='parallax__layer parallax__layer--base'>
          <h1>See my work</h1>
        </div>
      </div>
      <div className='parallax__layer--base'>
        <div className='text-flex'>
          <img src='/logo.webp' alt='high-quality render' />
          <div>
            <h1>James Moss, CEO and lead designer</h1>
            <p>
              As a CGI artist, being passionate and motivated about my work is
              important. It's what has lead me to a number of incredible
              projects and roles over the past 15 years, having gained a good
              amount of experience, I hope to use those skills to provide a
              service tailored to your 3d needs. I love the personal challenges
              a new project provides and I relish the opportunity to develop a
              new technique or skill
            </p>
          </div>
        </div>
        <div class='parallax__layer parallax__layer--back img1'>
          <img
            src='https://static.wixstatic.com/media/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.jpg/v1/fill/w_780,h_780,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.webp'
            alt='high-quality render'
          />
        </div>
      </div>
    </div>
  )
}
