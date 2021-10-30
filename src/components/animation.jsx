import React, { Component } from 'react'

export default class Animation extends Component {
  constructor(props) {
    super(props)
  }

  imageSource = () => {
    dir = this.props.dir + this.props.prefix
  }

  render() {
    return (
      <>
        <p> hi from return </p>
        <p> {dir} </p>
        <img />
      </>
    )
  }
}
