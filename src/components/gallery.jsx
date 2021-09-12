import { useState, useCallback, useEffect } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
//import Gallery from 'react-photo-gallery'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io'

export const homepage = [
  {
    src: 'https://static.wixstatic.com/media/eaaebe_59d0309efcaa49b28d107d971bbe3f29~mv2.jpg/v1/fit/w_600,h_600,q_90/eaaebe_59d0309efcaa49b28d107d971bbe3f29~mv2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_d84672423cd746569d649bf8249b5cb7~mv2.jpg/v1/fit/w_600,h_600,q_90/eaaebe_d84672423cd746569d649bf8249b5cb7~mv2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_25b45804e234425b82045a553722fed6f003.jpg/v1/fit/w_1067,h_600,q_90/eaaebe_25b45804e234425b82045a553722fed6f003.jpg',
    width: 1066,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_36a768f518b14ee0ad520db983f931cd~mv2.jpg/v1/fit/w_423,h_600,q_90/eaaebe_36a768f518b14ee0ad520db983f931cd~mv2.jpg',
    width: 422,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_39f4118bdba04fd6853c42cf9d762048~mv2.jpg/v1/fit/w_1067,h_600,q_90/eaaebe_39f4118bdba04fd6853c42cf9d762048~mv2.jpg',
    width: 1066,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_29905b12c3a64193ae514422b45d73d4~mv2.jpg/v1/fit/w_960,h_600,q_90/eaaebe_29905b12c3a64193ae514422b45d73d4~mv2.jpg',
    width: 960,
    height: 600,
  },
  {
    src: 'https://static.wixstatic.com/media/eaaebe_63d29e2f511a424484eb6959ea7b418d~mv2.jpg/v1/fill/w_1244,h_800,al_c,q_85,usm_0.66_1.00_0.01/eaaebe_63d29e2f511a424484eb6959ea7b418d~mv2.jpg',
    width: 960,
    height: 600,
  },
]

export const slideshow = [
  {
    src: 'images/3.jpg',
    width: 2500,
    height: 2500,
  },
  {
    src: 'images/5.jpg',
    width: 4156,
    height: 4156,
  },
]

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default function Gallery(props) {
  const size = useWindowSize()
  let width = size.width

  let items = props.items
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const images = props.images
  const [current, setCurrent] = useState(0)
  //const [timer, setTimer] = useState(interval)

  const slideNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }
  const slidePrev = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  return (
    <div className='gallery'>
      <IoIosArrowDropleftCircle
        id='left'
        className='arrow'
        onClick={() => slidePrev()}
      />
      <div className='gallery'>
        {images.map((img, index) => {
          if (index < current + items && index >= current) {
            return (
              <img src={img.src} alt='' onClick={() => openLightbox(index)} />
            )
          } else {
            return <></>
          }
        })}
        {images.map((img, index) => {
          if (index < current + items - images.length) {
            return (
              <img src={img.src} alt='' onClick={() => openLightbox(index)} />
            )
          } else {
            return <></>
          }
        })}
      </div>
      <IoIosArrowDroprightCircle
        id='right'
        className='arrow'
        onClick={() => slideNext()}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.images.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}
