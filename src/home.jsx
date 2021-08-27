import { NavLink } from 'react-router-dom'

import Clients from './components/clients'
import { homepage, Images } from './components/gallery.jsx'
import './css/home.scss'

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

/*
function on3dEvent() {
  const element = document.getElementById('#group2')
  window.onscroll((element) => {
    requestAnimationFrame('on3dEvent')
  })
}
*/
export default function Home() {
  return (
    <div className='page parallax'>
      <div id='group1' className='parallax__layer parallax__layer--base'>
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
            <Images images={homepage} />
          </div>
        </div>
      </div>
      <div id='group2' className='parallax__group'>
        <div className='parallax__layer parallax__layer--base'>
          <div className='text-flex'>
            <img src='/logo.png' alt='high-quality render' />
            <div>
              <h2>James Moss, CEO and lead designer</h2>
              <p>
                As a CGI artist, being passionate and motivated about my work is
                important. It's what has lead me to a number of incredible
                projects and roles over the past 15 years, having gained a good
                amount of experience, I hope to use those skills to provide a
                service tailored to your 3d needs. I love the personal
                challenges a new project provides and I relish the opportunity
                to develop a new technique or skill
              </p>
              <NavLink className='button' to='/work'>
                <h3>See my designs</h3>
              </NavLink>
            </div>
          </div>
        </div>
        <div className='parallax__layer parallax__layer--back'>
          <img
            src='https://static.wixstatic.com/media/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.jpg/v1/fill/w_780,h_780,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/eaaebe_53e83084ad3b4164957d7a383d307659~mv2.webp'
            alt='high-quality render'
          />
        </div>
      </div>
      <div className='parallax__layer parallax__layer--base'>
        <div className='text orange'>
          <h1>Clients</h1>
          <p>
            Since 2008, my design services have earned me an outstanding
            reputation amongst my clients. I’m your go-to source every step of
            the way. Check out my client list to get inspired by clicking on
            their logos and contact me today for more information.
          </p>
          <div className='clients'>
            <Clients />
          </div>
        </div>
        <div className='text'>
          <div className='b2'>
            <NavLink id='button2' className='button' to='/book'>
              <h3>Book with MVFX now</h3>
            </NavLink>
          </div>
          <Testimonials />
        </div>
      </div>
    </div>
  )
}
