import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import '../css/header.scss'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className={`header${this.props.visible ? '' : '--hidden'}`}>
          <div className='head'>
            <NavLink className='' to='/'>
              M \/ F X
            </NavLink>
            {/*
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
            */}
          </div>
          <div className='tail'>
            <NavLink to='/work'>Work</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/book'>Book now</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
          </div>
        </header>
        <header className='headerblock'></header>
      </>
    )
  }
}
