import React, { Component } from 'react'
import Slideshow from './slideshow'

import { homepage, slideshow } from './gallery'
import '../css/projects.scss'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

const projects = [
    {
        thumbnail: 'SQUARE/ALMOND_srgb.jpg',
        title: 'project1',
        body: 'lorem ipsum this is some text text text wqadijao i dkk some text',
        gallery: slideshow
    },
    {
        thumbnail: 'SQUARE/COLBOLT.jpg',
        title: 'project2',
        body: 'lorem ipsum this is some text text text wqadijao i dkk some text',
        gallery: slideshow
    },
    {
        thumbnail: 'SQUARE/GREEN.jpg',
        title: 'project3',
        body: 'lorem ipsum this is some text text text wqadijao i dkk some text',
        gallery: slideshow
    },
    {
        thumbnail: 'SQUARE/DRIP_BLUE.jpg',
        title: 'project4',
        body: 'lorem ipsum this is some text text text wqadijao i dkk some text',
        gallery: slideshow
    },
    {
        thumbnail: 'SQUARE/GARDEN_GREEN.jpg',
        title: 'project5',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde\
                hic rem iste beatae veritatis? Molestias, quibusdam illo! Dicta,\
                reprehenderit enim ab ullam \n ea atque nemo voluptatum\
                asperiores dolorum.',
        gallery: slideshow
    },
    {
        thumbnail: 'SQUARE/HONEY.jpg',
        title: 'project6',
        body: 'lorem ipsum this is some text text text wqadijao i dkk some text',
        gallery: slideshow
    },
]
export default class Projects extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      selected: 1,
    }
    
    this.select = this.select.bind(this)
  }
  select(index) {   
      console.log(index, projects.length - 1)
      this.setState({ selected: index} )
  }

  render() {
    return (
        <div className='projects-list'>
            <div className='projects'>
                {projects.map((x, i) => (
                    <>
                        <div 
                            className={i === this.state.selected ? 'img--selected' : 'img'} 
                            onClick={() => this.select(i)}
                            style={{
                                paddingLeft: i === 0  ? '0' : '',
                                paddingRight: i === projects.length - 1 ? '0' : '',
                            }}
                        >
                            <img src={x.thumbnail} alt='thumbnail'/>
                            <h4>0{i+1}</h4>
                            <div className={i == this.state.selected ? 'triangle' : 'triangle--hidden'} />
                        </div>
                    </>
                ))}
            </div>
            <div className='content'>
                <div className='text'>
                    <h3>{projects[this.state.selected].title}</h3>
                    <p>{projects[this.state.selected].body}</p>
                </div>
                <div className='imgs'>
                    <div className='bigimg'>
                        <img src={projects[this.state.selected].thumbnail} />
                    </div>
                    <div className='smallimgs'>
                        <div className='img'>
                            <img src='SQUARE/GREEN_ENERGY.jpg' />
                        </div>
                        <div className='img'>
                            <img src='SQUARE/BUTTER.jpg' />
                        </div>
                    </div>
                    {/*<Slideshow images={projects[this.state.selected].gallery} />*/}
                </div>
            </div>
        </div>
    )
  }
}