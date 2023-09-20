import React from 'react'
import { motion } from 'framer-motion'

import { AiFillHome } from 'react-icons/ai'
import { FaAddressBook, FaUserEdit } from 'react-icons/fa'
import { GiBurningBook } from 'react-icons/gi'

import './BottomMenu.scss'
import Navigation from '../Navigation'

const BottomMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, delay: 1.4 }}
    >
    <nav className='bottom-menu__nav'>
      <Navigation useImg={true}/>
    </nav>
     </motion.div>
  )
}

export default BottomMenu
