import React, { Suspense } from 'react'
import './css/home.scss'
import Slideshow from './components/slideshow'
import Gallery from './components/gallery'
import Images, { homepage, slideshow } from './components/gallery'

export default class Home extends React.Component {
  render() {
    return (
      <div className='page parallax'>
        <div id='group1' className='parallaxGroup'>
          <div className='parallaxLayer layerBack'>
            {/*<Slideshow images={slideshow} />*/}
            <img src='images/folding.jpeg' alt='folding desk design' />
          </div>
          <div className='parallaxLayer layerBase'>
            <div className='head'>
              <h1>WELCOME</h1>
              <h2>This is MVFX</h2>
            </div>
          </div>
        </div>
        <div id='group2' className='parallaxGroup'>
          <div class='parallaxLayer layerBase'>
            {/*<Images images={homepage} />*/}
            <div className='text-image margin'>
              <div className='txtcontainer'>
                <h2>High-End Product Visualisation on Demand</h2>
                <p>
                  James Moss is a CGI artist that specialises in product
                  visualisation and VFX, whose goal is to bring your 3d models
                  to life in stunning detail, as 3d visualisation is a great
                  way, creating unique pictures or footage of your product in a
                  cost effective way. ​ Using advanced rendering software,
                  powered by state of the art PCs to produce convincing, high
                  fidelity visuals and the ablity to handle large and complex
                  scenes, your product will be built in a productive, high
                  quality and rapid development environment.
                </p>
              </div>
              <div className='imgcontainer'>
                <img
                  src='images/CBD_ONE_SIGNITURE_BLEND_GROUP_SHOT_02.jpg'
                  alt='hq render'
                />
              </div>
            </div>
            <div className='services margin'>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam unde hic rem iste beatae veritatis? Molestias,
                  quibusdam illo! Dicta, reprehenderit quibusdam enim ab ullam
                  ea atque nemo voluptatum asperiores dolorum.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam unde hic rem iste beatae veritatis? Molestias,
                  quibusdam illo! Dicta, reprehenderit quibusdam enim ab ullam
                  ea atque nemo voluptatum asperiores dolorum.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam unde hic rem iste beatae veritatis? Molestias,
                  quibusdam illo! Dicta, reprehenderit quibusdam enim ab ullam
                  ea atque nemo voluptatum asperiores dolorum.
                </p>
              </div>
            </div>
            {/*
            <div className='text-flex'>
              <div className='txtcontainer'>
                <h2>James Moss</h2>
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
              <div className='txtcontainer'>
                <h2>High-End Product Visualisation on Demand</h2>
                <p>
                  James Moss is a CGI artist that specialises in product
                  visualisation and VFX, whose goal is to bring your 3d models
                  to life in stunning detail, as 3d visualisation is a great
                  way, creating unique pictures or footage of your product in a
                  cost effective way. ​ Using advanced rendering software,
                  powered by state of the art PCs to produce convincing, high
                  fidelity visuals and the ablity to handle large and complex
                  scenes, your product will be built in a productive, high
                  quality and rapid development environment.
                </p>
              </div>
              <div className='imgcontainer'>
                {/*<img src='images/HB_BLUE.jpg' alt='hq render' />*/}
                <Slideshow images={slideshow} />
              </div>
            </div>
            <div className='showreel'>
              <h1> SHOWREEL </h1>
            </div>
            <div className='bookings'>
              <h1> BOOKINGS </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
