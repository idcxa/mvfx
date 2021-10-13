import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Home from './home'
import Products from './book'
import './css/header.scss'
import Navbar from './components/navbar'
import MailForm from './components/mailform'
//import { keyframes } from 'styled-components'

class Main extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      scrollTop: 0,
      visible: true,
      buffer: 0,
    }
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop
    const prevScroll = this.state.scrollTop
    console.log(prevScroll, scrollTop, this.state.buffer)
    // previous and current
    // if previous > current: hide
    // if previous < current: show
    // but only show if current < previous - 20
    if (prevScroll > scrollTop) {
      this.setState({ buffer: prevScroll - scrollTop })
    } else {
      this.setState({ buffer: 0 })
    }
    this.setState({
      scrollTop: scrollTop,
      visible:
        (prevScroll > scrollTop &&
          (this.state.visible === true || this.state.buffer > 20)) ||
        scrollTop < 300,
    })
  }
  render() {
    return (
      <HashRouter>
        <div id='content'>
          <Navbar visible={this.state.visible} />
          <MailForm />
          <div
            className='page parallax'
            ref={this.myRef}
            onScroll={() => this.onScroll()}>
            <Route exact path='/' component={Home} />
            <Route path='/book' component={Products} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main
