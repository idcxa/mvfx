import Navbar from './navbar'
import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'

export default class Layout extends React.Component {
  // all your scrolling functions & stuff here

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = { scrollTop: 0 }
  }

  onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    console.log('scrollY:', scrollY)
    const scrollTop = this.myRef.current.scrollTop
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    )
    this.setState({
      scrollTop: scrollTop,
    })
  }
  render() {
    return (
      <section>
        <Navbar />
        <div className='page parallax' onScroll={() => this.onScroll()}>
          {this.props.children}
        </div>
      </section>
    )
  }
}
