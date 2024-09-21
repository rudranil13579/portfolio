import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <Projects/>
      <About/>
      <Contacts/>

    </>
  )
}

export default App
