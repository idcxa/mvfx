import React from 'react'
import './css/home.scss'
import Slideshow from './components/slideshow'
import Gallery from './components/gallery'
import { homepage, slideshow } from './components/gallery'
import Fade from 'react-reveal/Fade'
import Clients from './components/clients.jsx'

/// https://codepen.io/hexagoncircle/full/JjRYaZw

export default function Home(props) {
  function onClick() {
    props.showMailform()
  }
  return (
    <>
      <div id='group1' className='parallaxGroup'>
        <div className='parallaxLayer layerBack'>
          {/*<Slideshow images={slideshow} />*/}
          <img src='images/folding.jpeg' alt='folding desk design' />
        </div>
        <div className='parallaxLayer layerBase'>
          <div className='head'>
            <h1>WELCOME</h1>
            <h4>This is MVFX</h4>
          </div>
        </div>
      </div>
      <div id='group2' className='parallaxGroup'>
        {/*<Images images={homepage} />*/}
        <div className='text-image margin clearfix'>
          <div className='txtcontainer'>
            <h3>High-End Product Visualisation on Demand</h3>
            <p>
              James Moss is a CGI artist that specialises in product
              visualisation and VFX, whose goal is to bring your 3d models to
              life in stunning detail, as 3d visualisation is a great way,
              creating unique pictures or footage of your product in a cost
              effective way. ​ Using advanced rendering software, powered by
              state of the art PCs to produce convincing, high fidelity visuals
              and the ablity to handle large and complex scenes, your product
              will be built in a productive, high quality and rapid development
              environment.
            </p>
          </div>
          <div className='imgcontainer'>
            <img
              src='images/CBD_ONE_SIGNITURE_BLEND_GROUP_SHOT_02.jpg'
              alt='hq render'
            />
          </div>
        </div>
      </div>
      <div className='services margin'>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde
            hic rem iste beatae veritatis? Molestias, quibusdam illo! Dicta,
            reprehenderit quibusdam enim ab ullam ea atque nemo voluptatum
            asperiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde
            hic rem iste beatae veritatis? Molestias, quibusdam illo! Dicta,
            reprehenderit quibusdam enim ab ullam ea atque nemo voluptatum
            asperiores dolorum.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde
            hic rem iste beatae veritatis? Molestias, quibusdam illo! Dicta,
            reprehenderit quibusdam enim ab ullam ea atque nemo voluptatum
            asperiores dolorum.
          </p>
        </div>
      </div>
      {/*
            <div className='text-flex'>
              <div className='txtcontainer'>
                <h3>James Moss</h3>
                <p>
                  As a CGI artist, being passionate and motivated about my work
                  is important. It's what has lead me to a number of incredible
                  projects and roles over the past 15 years, having gained a
                  good amount of experience, I hope to use those skills to
                  provide a service tailored to your 3d needs. I love the
                  personal challenges a new project provides and I relish the
                  opportunity to develop a new technique or skill
                </p>
              </div>
              <div className='imgcontainer'>
                <img
                  src='images/NEW_LOGO-WHITE.png'
                  alt='high-quality render'
                />
              </div>
            </div>
              */}

      <Gallery className='pad' images={homepage} items={5} />
      <div id='text2' className='text-image margin'>
        <Fade left>
          <div className='txtcontainer'>
            <h3>High-End Product Visualisation on Demand</h3>
            <p>
              James Moss is a CGI artist that specialises in product
              visualisation and VFX, whose goal is to bring your 3d models to
              life in stunning detail, as 3d visualisation is a great way,
              creating unique pictures or footage of your product in a cost
              effective way. ​ Using advanced rendering software, powered by
              state of the art PCs to produce convincing, high fidelity visuals
              and the ablity to handle large and complex scenes, your product
              will be built in a productive, high quality and rapid development
              environment.
            </p>
          </div>
        </Fade>
        <div className='imgcontainer'>
          {/*<img src='images/HB_BLUE.jpg' alt='hq render' />*/}
          <Slideshow images={slideshow} />
        </div>
      </div>
      <div className='showreel'>
        <h2> SHOWREEL </h2>
      </div>
      <div className='sidebyside'>
        <div className='bookings margin'>
          <h2> BOOKINGS </h2>
          <h4> client satisfaction is our goal </h4>
          <div className='flex'>
            <div>
              <h3>
                <strong>£</strong>150
              </h3>
              <p>daily</p>
            </div>
            <div>
              <h3>
                <strong>£</strong>5,000
              </h3>
              <p>monthly</p>
            </div>
            <div>
              <h3>
                <strong>£</strong>1,500
              </h3>
              <p>weekly</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h4>SOME</h4>
              <p>text about this price bracket</p>
            </div>
            <div>
              <h4>SOME</h4>
              <p>text about this price bracket</p>
              <p>some more text about this price bracket</p>
              <p>even more text about this price bracket</p>
            </div>
            <div>
              <h4>SOME</h4>
              <p>text about this price bracket</p>
              <p>some more text about this price bracket</p>
            </div>
          </div>
        </div>
        <div className='clients-div margin'>
          <Clients />
        </div>
      </div>

      <div className='parallaxGroup showreel-placeholder'>
        <div className='parallaxLayer layerBack flex'>
          <div className='text-box'>
            <h2> SHOWREEL </h2>
          </div>
          {/*<Slideshow images={slideshow} />*/}
        </div>
      </div>
      <div className='bookings margin'>
        <div className='title'>
          <div>
            <h2> BOOKINGS </h2>
            <h4> client satisfaction is our goal </h4>
          </div>
          <button onClick={() => onClick()}>
            <h3>BOOK NOW</h3>
          </button>
        </div>
        <div className='flex'>
          <div>
            <h3>
              <strong>£</strong>150
            </h3>
            <p>daily</p>
          </div>
          <div>
            <h3>
              <strong>£</strong>5,000
            </h3>
            <p>monthly</p>
          </div>
          <div>
            <h3>
              <strong>£</strong>1,500
            </h3>
            <p>weekly</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <h4>SOME</h4>
            <p>text about this price bracket</p>
          </div>
          <div>
            <h4>SOME</h4>
            <p>text about this price bracket</p>
            <p>some more text about this price bracket</p>
            <p>even more text about this price bracket</p>
          </div>
          <div>
            <h4>SOME</h4>
            <p>text about this price bracket</p>
            <p>some more text about this price bracket</p>
          </div>
        </div>
      </div>
      <div className='clients-div margin'>
        <Clients />
      </div>
      <div className='parallaxGroup showreel-placeholder'>
        <div className='parallaxLayer layerBack flex'>
          <h2> image sequence </h2>
          {/*<Slideshow images={slideshow} />*/}
        </div>
      </div>
      <div className='bookings margin'>
        <div className='title'>
          <div>
            <h2> FEEDBACK </h2>
            <h4> is client satisfaction our goal? </h4>
          </div>
          <button onClick={() => onClick()}>
            <h3>BOOK NOW</h3>
          </button>
        </div>
        <div className='flex'>
          <div>
            <h4>SOME</h4>
            <p>these text boxes can be customised a</p>
          </div>
          <div>
            <h4>SOME</h4>
            <p>bit better once we have</p>
          </div>
          <div>
            <h4>SOME</h4>
            <p>some content for them</p>
          </div>
        </div>
      </div>
      <div className='verticalgap' />
      <div className='bookings margin'>
        <div className='title'>
          <div>
            <h2> PLACEHOLDER </h2>
            <h4> client satisfaction? </h4>
          </div>
          <button onClick={() => onClick()}>
            <h3>A BUTTON!</h3>
          </button>
        </div>
        <div className='flex'>
          <div>
            <h4>THIS</h4>
            <p>is a placeholder div</p>
          </div>
          <div>
            <h4>SOME</h4>
            <p>another</p>
          </div>
          <div>
            <h4>EPIC</h4>
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  )
}
