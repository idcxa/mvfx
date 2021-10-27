import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './home'
import Products from './book'
import './css/header.scss'
import Navbar from './components/navbar'
import Footer from './components/footer'
import MailForm from './components/mailform'
//import Siblings from './components/siblings'
//import { keyframes } from 'styled-components'

class Main extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      scrollTop: 0,
      navbarvisible: true,
      mailformvisible: false,
      mailformshow: true,
      buffer: 0,
    }
  }

  showMailform = () => {
    this.setState({ mailformvisible: true, mailformshow: false })
    this.child.toggleShow()
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop
    const prevScroll = this.state.scrollTop
    //console.log(prevScroll, scrollTop, this.state.buffer)
    //console.log(this.state.mailformvisible, this.state.mailformshow)
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
      navbarvisible:
        (prevScroll > scrollTop &&
          (this.state.navbarvisible === true || this.state.buffer > 20)) ||
        scrollTop < 300,
    })
  }

  render() {
    return (
      <Router>
        <Navbar visible={this.state.navbarvisible} />
        <div id='content'>
          <MailForm
            visibility={this.state.mailformvisible}
            show={this.state.mailformshow}
            onRef={(ref) => (this.child = ref)}
          />
          <div className='page parallax' ref={this.myRef}>
            <Navbar visible={false} />
            <Switch>
              <Route
                exact
                path='/'
                component={() => <Home showMailform={this.showMailform} />}
              />
              <Route path='/products' component={Products} />
            </Switch>
            <Footer style={{ position: 'relative', visibility: 'hidden' }} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default Main
