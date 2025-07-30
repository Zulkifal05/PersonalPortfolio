import React from 'react'
import Header from "./components/Header"
import About from "./components/About"
import AnimatedItem from "./components/AnimatedItem"
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <AnimatedItem>
        <Header /> 
      </AnimatedItem>
      <AnimatedItem>
        <About /> 
      </AnimatedItem>
      <AnimatedItem>
        <Skills /> 
      </AnimatedItem>
      <AnimatedItem>
        <Projects /> 
      </AnimatedItem>
    </>
  )
}

export default App