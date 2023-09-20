import React from 'react'

import './NavBar.scss'
import Navigation from '../Navigation'

const NavBar = () => {
  return (
    <div className="app__navbar">
      <div className="app__logo">
        andrmo
      </div>
      <nav className="app__navbar-menu">
       <Navigation useImg={false} />
      </nav>
    </div>
  )
}

export default NavBar
