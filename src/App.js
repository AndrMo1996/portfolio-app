import React from 'react'

import './App.scss'

import { Header, About, Skills, Portfolio } from './containers'
import BottomMenu from './components/BottomMenu/BottomMenu'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <BottomMenu />
      <Header />
      <About />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default App
