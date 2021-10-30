import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './home'
import Products from './book'
//import './css/header.scss'
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
      played: 0,
      showFooter: false,
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

  nuScroll = () => {
    //const scrollTop = this.myRef.current.scrollTop
    //const prevScroll = this.state.scrollTop
    //console.log(prevScroll, scrollTop, this.state.buffer)
    //console.log(scrollTop + 1, 1000 / (scrollTop + 5))
    //this.child.seekTo( (scrollTop+5))

    //const top = this.page.getBoundingClientRect().top
    //const bottom = this.page.getBoundingClientRect().bottom

    //console.log(top, bottom)

    this.child.isInViewport()
  }

  render() {
    return (
      <>
        <div id='content'>
          <div
            ref={(e) => (this.page = e)}
            className='page parallax'
            onScroll={this.nuScroll}>
            {/*<MailForm
              visibility={this.state.mailformvisible}
              show={this.state.mailformshow}
              onRef={(ref) => (this.child = ref)}
            />*/}
            <Router>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={() => (
                    <Home
                      onRef={(ref) => (this.child = ref)}
                      showMailform={this.showMailform}
                    />
                  )}
                />
                <Route path='/products' component={Products} />
              </Switch>
            </Router>
            <Footer style={{ position: 'relative', visibility: 'visible' }} />
          </div>
          <Footer
            style={{ visibility: this.state.showFooter ? 'visible' : 'hidden' }}
          />
        </div>
      </>
    )
  }
}

export default Main
