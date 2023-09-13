import React from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaAddressBook, FaUserEdit } from 'react-icons/fa'
import { GiBurningBook } from 'react-icons/gi'

import './BottomMenu.scss'

const BottomMenu = () => {
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#about'><FaUserEdit/></a>
      <a href='#skills'><GiBurningBook/></a>
      <a href='#portfolio'><FaAddressBook/></a>
    </nav>
  )
}

export default BottomMenu
