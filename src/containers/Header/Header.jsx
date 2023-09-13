import React from 'react'
import HeaderSocials from './HeaderSocials'
import {images} from '../../constants'
import "./Header.scss"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header_info-box">
          <div className="header__me">
            <img src={images.me} alt="It's me" />
          </div>
          <div className="header__info">
            <h4>Hi I'm</h4>
            <h1>Andrii Moruzhko</h1>
            <h5>Fullstack developer</h5>
          </div>
        </div>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header
