import React, { Component } from 'react'

function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}

export default class Animation extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let images = this.loadImages()
    images.forEach((x) => {
      const img = new Image()
      img.src = x
      window[x] = img
    })
  }

  loadImages = () => {
    let images = []
    for (let i = 0; i <= this.props.total; i++) {
      let src = `${this.props.dir + this.props.prefix + pad(i, 3)}.jpg`
      images.push(src)
    }
    return images
  }

  imageSource = () => {
    this.frame = this.props.total * this.props.progress
    console.log(this.frame)
    this.src = this.props.dir + this.props.prefix + this.frame
    console.log(this.src)
  }

  render() {
    let frame = Math.floor(this.props.total * this.props.progress)

    let src = `${this.props.dir + this.props.prefix + pad(frame, 3)}.jpg`

    return (
      <div>
        <img src={src} alt={src} style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }
}
