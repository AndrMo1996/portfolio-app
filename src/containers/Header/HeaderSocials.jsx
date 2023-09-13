import React from 'react'

import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {TbBrandGmail} from 'react-icons/tb'

import { socials } from '../../constants/socials'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href={socials.github}><BsGithub/></a>
      <a href={socials.linkedIn}><BsLinkedin/></a>
      <a href={socials.gmail}><TbBrandGmail/></a>
    </div>
  )
}

export default HeaderSocials
