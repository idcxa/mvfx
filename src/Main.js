import { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './home'
import Products from './book'
import './css/header.scss'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <header className='header'>
          <div className='head'>
            <NavLink className='text-2xl text-purple' to='/'>
              MVFX LTD.
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='/navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div className='tail'>
            <NavLink to='/work'>Work</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/book'>Book now</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
          </div>
        </header>
        <div className='content'>
          <Route exact path='/' component={Home} />
          <Route path='/book' component={Products} />
        </div>
      </HashRouter>
    )
  }
}

export default Main
