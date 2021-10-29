import React, { Component } from 'react'
import './css/home.scss'
import Slideshow from './components/slideshow'
import Gallery from './components/gallery'
import Projects from './components/projects'
import { homepage, slideshow } from './components/gallery'
import Fade from 'react-reveal/Fade'
import Clients from './components/clients.jsx'
import ReactPlayer from 'react-player'
import PlayerApp from './components/react-player'
import { render } from '@testing-library/react'
import screenfull from 'screenfull'
import { findDOMNode } from 'react-dom'

/// https://codepen.io/hexagoncircle/full/JjRYaZw

export default class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      playVideo: false,
      image: 0
    }
    this.onClick = this.onClick.bind(this)
    this.handleProgress = this.handleProgress.bind(this)
    this.temp = this.temp.bind(this)
  }
  onClick = () => {
    this.props.showMailform()
  }
  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    this.setState(state)
  }

  temp = () => {
    this.setState({played: parseFloat(0.0)})
    console.log(this.state)
    this.player.seekTo(parseFloat(0))
  }

    //attach our function to document event listener on scrolling whole doc
    componentDidMount() {
      this.props.onRef(this)
      document.addEventListener("scroll", this.isInViewport);
    }

    //do not forget to remove it after destroyed
    componentWillUnmount() {
      document.removeEventListener("scroll", this.isInViewport);
      this.props.onRef(undefined)
    }

    //our function which is called anytime document is scrolling (on scrolling)
    isInViewport = () => {
        //get how much pixels left to scrolling our ReactElement
        const top = this.showreel.getBoundingClientRect().top;
        const bottom = this.showreel.getBoundingClientRect().bottom;

        //here we check if element top reference is on the top of viewport
        /*
        * If the value is positive then top of element is below the top of viewport
        * If the value is zero then top of element is on the top of viewport
        * If the value is negative then top of element is above the top of viewport
        * */
       console.log(top, bottom)
        if(top <= 500){
            console.log("Element is in view or above the viewport");
            this.setState({playVideo: true})
        } else if (top >= 600) {
            console.log("Element is outside view");
            this.setState({playVideo: false})
        }
    };


  seekTo = (x) => {
    //console.log(x)
    console.log('dost thou seek the holy animation?')
    this.player.seekTo(parseFloat(x))
  } 

  showImage = (x) => {
    let img = 1000 / x
    this.setState({image: img})
  }

  ref = player => {
    this.player = player
  }

  render() {
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
        <div className='text-image margin'>
          <ReactPlayer url='showreel.mp4' 
            ref={this.ref}
            loop='false' 
            //playing='false' 
            onProgress={this.handleProgress}
          />
          <button onClick={this.temp}>
            CLICK HERE TO SET VIDEO TO START
          </button>
          <div className='flex-text-image'>
            <div className='txtcontainer'>
              <h3> MVFX STUDIO </h3>
              <p>
                James Moss is a CGI artist that specialises in product
                visualisation and VFX, whose goal is to bring your 3d models to
                life in stunning detail
              </p>
              <p>
                as 3d visualisation is a great way,
                creating unique pictures or footage of your product in a cost
                effective way. ​ 
              <p>
              </p>
                Using advanced rendering software, powered by
                state of the art PCs to produce convincing.
              </p>
            </div>
            <div className='imgcontainer'>
              <img
                src='images/CBD_ONE_SIGNITURE_BLEND_GROUP_SHOT_02.jpg'
                alt='hq render'
              />
            </div>
          </div>          
          <h3 style={{margin: '2rem'}}> HIGH END RENDER</h3>      
          <div className='boxes'>
            <div>
              <h4>3D</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p><p>veritatis? Molestias, quibusdam illo! Dicta,
                reprehenderit quibusdam 
              </p>
            </div>
            <div>
              <h4>RENDERING</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p><p>veritatis? Molestias, quibusdam illo! Dicta,
                reprehenderit quibusdam 
              </p>
            </div>
            <div>
              <h4>VFX</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </p><p>veritatis? Molestias, quibusdam illo! Dicta,
                reprehenderit quibusdam 
              </p>
            </div>
          </div>
          <Projects />
        </div>          
      </div>

      <div ref={(e) => this.showreel = e} className='parallaxGroup showreel-placeholder'>
        <div id='video' className='parallaxLayer layerBack flex'>
          <ReactPlayer onDoubleClick={() => screenfull.request(findDOMNode(this.player))} width='100%' height='100%' loop={true} playing={this.state.playVideo} url='showreel.mp4' controls={false}/>
          {/*<Slideshow images={slideshow} />*/}
        </div>
      </div>
 
    <div id='group2' className='parallaxGroup'>
      <div className='bookings margin'>
        <div className='title'>
          <div>
            <h2> BOOKINGS </h2>
            <h4> client satisfaction is our goal </h4>
          </div>
          {/*
          <button onClick={() => onClick()}>
            <h3>BOOK NOW</h3>
          </button>
          */}
        </div>
        <div className='flex'>
          <div>
            <h3>
              <strong>£</strong>350
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
      </div>

    <div id='group2' className='parallaxGroup'>
      <div id='text2' className='text-image margin'>
        <div className='flex-text-image'>
          <Fade left>
            <div className='txtcontainer'>
              {/*
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
              */}
              <h3> MVFX STUDIO </h3>
              <p>
                James Moss is a CGI artist that specialises in product
                visualisation and VFX, whose goal is to bring your 3d models to
                life in stunning detail
              </p>
              <p>
                as 3d visualisation is a great way,
                creating unique pictures or footage of your product in a cost
                effective way. ​ 
              <p>
              </p>
                Using advanced rendering software, powered by
                state of the art PCs to produce convincing.
              </p>
            </div>
          </Fade>
          <div className='imgcontainer'>
            {/*<img src='images/HB_BLUE.jpg' alt='hq render' />*/}
            <Slideshow images={slideshow} />
          </div>
      </div>
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
          <button onClick={this.onClick}>
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
          <button onClick={this.onClick}>
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
}
