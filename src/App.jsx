import React from 'react'
import Header from "./components/Header"
import About from "./components/About"
import AnimatedItem from "./components/AnimatedItem"

const App = () => {
  return (
    <>
      <AnimatedItem>
        <Header /> 
      </AnimatedItem>
      <AnimatedItem>
        <About /> 
      </AnimatedItem>
    </>
  )
}

export default App