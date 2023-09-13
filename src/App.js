import React from 'react'

import './App.scss'

import { Header, About, Skills, Footer } from './containers'
import BottomMenu from './components/BottomMenu/BottomMenu'

const App = () => {
  return (
    <div className="app">
      <BottomMenu />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
