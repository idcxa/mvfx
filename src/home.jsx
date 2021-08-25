import { useState, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from './components/photos'
import './css/home.scss'

export const clients = [
  {
    url: 'https://simpleealoe.com/',
    image:
      'https://static.wixstatic.com/media/eaaebe_ad29920dd1e449a891b44a4fecfe754b~mv2.png/v1/fill/w_220,h_162,al_c,q_85,usm_0.66_1.00_0.01/SA_LOGO.webp',
  },
  {
    url: 'https://static.wixstatic.com/media/eaaebe_65c0e1d5e3b24b969aa79066af459ea7~mv2.png/v1/fill/w_220,h_30,al_c,q_85,usm_0.66_1.00_0.01/BERBERRY_LOGO.webp',
    image:
      'https://static.wixstatic.com/media/eaaebe_65c0e1d5e3b24b969aa79066af459ea7~mv2.png/v1/fill/w_220,h_30,al_c,q_85,usm_0.66_1.00_0.01/BERBERRY_LOGO.webp',
  },
  {
    url: 'https://shop.levooil.com/products/levo-ii',
    image:
      'https://static.wixstatic.com/media/eaaebe_1ccff5bbe7774f7b8040426f054b108d~mv2.png/v1/fill/w_220,h_175,al_c,q_85,usm_0.66_1.00_0.01/LEVO_LOGO.webp',
  },
  {
    url: 'https://www.lighthubdirect.com/collections/hall-corridor-lights/products/lighthub-half-moon-modern-up-gypsum-plaster-indoor-paintable-wall-washer-uplight-e14-ses-sconce-light-fitting-led-ready-white',
    image:
      'https://static.wixstatic.com/media/eaaebe_c8f9ef4dd86d4eec9703e387a943cea1~mv2.png/v1/fill/w_220,h_49,al_c,q_85,usm_0.66_1.00_0.01/LIGHTHUB_LOGO.webp',
  },
  {
    url: 'https://www.iconnutrition.com/',
    image:
      'https://static.wixstatic.com/media/eaaebe_86e87715ccc14876b8d683dd1c2835f5~mv2.png/v1/fill/w_220,h_57,al_c,q_85,usm_0.66_1.00_0.01/ICON_LOGO.webp',
  },
  {
    url: 'https://greenssteel.com/',
    image:
      'https://static.wixstatic.com/media/eaaebe_baf7d91906a148dabd1aeb0c9157af64~mv2.png/v1/fill/w_220,h_94,al_c,q_85,usm_0.66_1.00_0.01/GREENS_LOGO.webp',
  },
  {
    url: 'https://static.wixstatic.com/media/eaaebe_418cf961139e410b96d6950bd9e66629~mv2.png/v1/fill/w_220,h_69,al_c,q_85,usm_0.66_1.00_0.01/DANONE_LOGO.webp',
    image:
      'https://static.wixstatic.com/media/eaaebe_418cf961139e410b96d6950bd9e66629~mv2.png/v1/fill/w_220,h_69,al_c,q_85,usm_0.66_1.00_0.01/DANONE_LOGO.webp',
  },
  {
    url: 'https://www.rockoil.co.uk/cm/',
    image:
      'https://static.wixstatic.com/media/eaaebe_62eed3070dec40758a79e6e2783abd80~mv2.png/v1/fill/w_220,h_138,al_c,q_85,usm_0.66_1.00_0.01/ROCK_OIL_LOGO.webp',
  },
  {
    url: 'https://capsuleskateboards.com/skateboards',
    image:
      'https://static.wixstatic.com/media/eaaebe_32543cadd39842808a9ab1ecd126b3f1~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01/CAP_LOGO.webp',
  },
  {
    url: 'https://www.nordicsupplements.com/',
    image:
      'https://static.wixstatic.com/media/eaaebe_a53b971bc5b042fea1130cef5e63fdb0~mv2.png/v1/fill/w_220,h_67,al_c,q_85,usm_0.66_1.00_0.01/NS_LOGO.webp',
  },
  {
    url: 'https://theturmeric.co/',
    image:
      'https://static.wixstatic.com/media/eaaebe_13d0659ec2bb46cb907bccecc5513c99~mv2.png/v1/fill/w_220,h_182,al_c,q_85,usm_0.66_1.00_0.01/TTC_LOGO.webp',
  },
  {
    url: 'https://static.wixstatic.com/media/eaaebe_b0cfed0029734bb095357685f73e971c~mv2.png/v1/fill/w_220,h_37,al_c,q_85,usm_0.66_1.00_0.01/WATT_LOGO.webp',
    image:
      'https://static.wixstatic.com/media/eaaebe_b0cfed0029734bb095357685f73e971c~mv2.png/v1/fill/w_220,h_37,al_c,q_85,usm_0.66_1.00_0.01/WATT_LOGO.webp',
  },
  {
    url: 'https://www.casewarehouse.com/',
    image:
      'https://static.wixstatic.com/media/eaaebe_5f2ad96c40e143aa95cf7dba536102f8~mv2.png/v1/fill/w_220,h_22,al_c,q_85,usm_0.66_1.00_0.01/CW_LOGO.webp',
  },
  {
    url: 'https://cbd-one.co.uk/',
    image:
      'https://static.wixstatic.com/media/eaaebe_316419ff03224b12afb8331698398d19~mv2.png/v1/fill/w_156,h_200,al_c,q_85,usm_0.66_1.00_0.01/CBD_ONE.webp',
  },
  {
    url: 'https://static.wixstatic.com/media/eaaebe_fb2c3c0daa2b4ddc8d714199ee1c532d~mv2.png/v1/fill/w_220,h_30,al_c,q_85,usm_0.66_1.00_0.01/EASTBROOK_LOGO.webp',
    image:
      'https://static.wixstatic.com/media/eaaebe_fb2c3c0daa2b4ddc8d714199ee1c532d~mv2.png/v1/fill/w_220,h_30,al_c,q_85,usm_0.66_1.00_0.01/EASTBROOK_LOGO.webp',
  },
  {
    url: 'https://static.wixstatic.com/media/eaaebe_fad7055c0fbb44459204bca61cbac466~mv2.png/v1/fill/w_220,h_82,al_c,q_85,usm_0.66_1.00_0.01/SPRING_LOGO.webp',
    image:
      'https://static.wixstatic.com/media/eaaebe_fad7055c0fbb44459204bca61cbac466~mv2.png/v1/fill/w_220,h_82,al_c,q_85,usm_0.66_1.00_0.01/SPRING_LOGO.webp',
  },
]

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

export function Testimonials() {
  const testimonialsText = [
    {
      name: 'Anna Rewinska',
      company: 'Blue Drop Studio',
      text: "Another very successful project and amazing quality of work & communication\nWe're looking forward to the future collaborations. James is an exceptional talent!",
      url: 'https://www.bluedropstudio.com/',
      image:
        'https://uploads-ssl.webflow.com/5daccd454c72ccc568f28d6c/5eb1577f8a376a00e94573d2_Blue%20Drop%20Logo%20Black.svg',
    },
    {
      name: 'Andre Fairweather',
      company: 'Rock Oil',
      text: "Top work as usual! James has an eye for detail and appreciates the look we're going for with our products.\nExcellent job and will be going back to him in future for other 3d modelling work.",
      url: 'https://www.rockoil.co.uk/cm/',
      image:
        'https://static.wixstatic.com/media/eaaebe_62eed3070dec40758a79e6e2783abd80~mv2.png/v1/fill/w_220,h_138,al_c,q_85,usm_0.66_1.00_0.01/ROCK_OIL_LOGO.webp',
    },
    {
      name: 'Abdullah Green',
      company: "Green's Steel",
      text: 'Love working with James. He always delivers great renders, high quality and very accurate.\nDefinitely recommend!',
      url: 'https://greenssteel.com/',
      image:
        'https://static.wixstatic.com/media/eaaebe_baf7d91906a148dabd1aeb0c9157af64~mv2.png/v1/fill/w_220,h_94,al_c,q_85,usm_0.66_1.00_0.01/GREENS_LOGO.webp',
    },
  ]
  return (
    <div className='testimonials'>
      {testimonialsText.map((x) => (
        <div>
          <p className='text'>
            {x.text.split('\n').map((str) => (
              <p>{str}</p>
            ))}
          </p>
          <h3 className='name'>{x.name}</h3>
          <a href={x.url}>
            <img src={x.image} alt={x.image}></img>
          </a>
          {/*<p className='company'>{x.company}</p>*/}
        </div>
      ))}
    </div>
  )
}

export default function Home() {
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
          <div className='gallery'>
            <Images images={photos} />
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
        <div class='parallax__layer parallax__layer--base text-flex'>
          <img src='/logo.png' alt='high-quality render' />
          <div>
            <h2>James Moss, CEO and lead designer</h2>
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
      <div className='parallax__layer--base'>
        <div className='text orange'>
          <h1>Clients</h1>
          <p>
            Since 2008, my design services have earned me an outstanding
            reputation amongst my clients. I’m your go-to source every step of
            the way. Check out my client list to get inspired by clicking on
            their logos and contact me today for more information.
          </p>
          <div className='clients'>
            {clients.map((x) => {
              return (
                <>
                  <a href={x.url}>
                    <img src={x.image} alt={x.image}></img>
                  </a>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div class='parallax__group size2'>
        <div class='parallax__layer parallax__layer--back'>
          <img
            src='https://static.wixstatic.com/media/eaaebe_d1cb53b6082c4d078ac25ef3a4922478~mv2.jpg/v1/fill/w_1422,h_800,al_c,q_85,usm_0.66_1.00_0.01/eaaebe_d1cb53b6082c4d078ac25ef3a4922478~mv2.jpg'
            alt='high-quality render'
          />
        </div>
        <div class='parallax__layer parallax__layer--base'>
          <div className='button'>
            <a href='/booking'>
              <h2>Book Now</h2>
            </a>
          </div>
        </div>
      </div>
      <div className='text'>
        <div>
          <h2 style={{ paddingTop: '4vh' }}>See what others think</h2>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}
