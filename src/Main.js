import { useState } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './home'
import Products from './book'
//import './css/header.scss'
/*
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
*/
export default function Main() {
  const [expanded, toggleOpen] = useState(false)
  return (
    <HashRouter>
      <nav
        className="bg-red fixed w-full flex items-center center flex-wrap p-2
        sm:p-6
        md:items-center md:justify-center mx-auto"
      >
        <div>
          <div className="flex items-center flex-no-shrink mr-6 md:items-center xpad:items-left">
            <img
              className="h-8 w-8 mr-2"
              width="54"
              height="54"
              src="/mvfxwebp.webp"
              alt="logo"
            />
            <NavLink
              to="/"
              className="p-2 hover:text-ash font-semibold text-2xl text-sand tracking-tight"
            >
              M \/ F X
            </NavLink>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded border-ash hover:text-sivler hover:border-sivler"
              onClick={() => toggleOpen(!expanded)}
            >
              <img
                className="h-3 w-3"
                width={14}
                height={14}
                src="/icons/noun_Menu.png"
              ></img>
            </button>
          </div>
          <div
            id="hideuntil"
            className={
              `w-full block flex-grow lg:flex lg:items-center xpad:items-right xpad:visible lg:w-auto
          sm:hidden` + (!expanded ? ' sm:hidden' : 'sm:visible')
            }
          >
            <div className="text-sm lg:flex-grow">
              <NavLink
                to="/about"
                className="text-silver hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-sivler mr-4"
              >
                About
              </NavLink>

              {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Heart.png" /> */}
              <NavLink
                to="/faq"
                className="text-silver hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0  hover:text-sivler mr-4"
              >
                FAQ
              </NavLink>

              {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Shop.png" /> */}
              <NavLink
                to="/contact"
                className="text-silver  hover:text-pine text-lg block mt-4 lg:inline-block lg:mt-0 hover:text-sivler"
              >
                Contact us
              </NavLink>
              {/* <img className="h-8 w-8 mr-2 sm:hidden" width="24" height="24" src="/icons/noun_Phone.png" /> */}
            </div>
          </div>
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/book" component={Products} />
        </div>
      </nav>
    </HashRouter>
  )
}
