import React, { useRef } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import AnimatedItem from "./components/AnimatedItem"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from "./components/Contact"

const App = () => {
  let AboutRef = useRef();
  let SkillsRef = useRef();
  let ProjectsRef = useRef();
  let ContactRef = useRef();

  return (
    <>
      <AnimatedItem>
        <Header AboutReference={AboutRef} SkillsReference={SkillsRef} ProjectsReference={ProjectsRef} ContactReference={ContactRef}/> 
      </AnimatedItem>
      <AnimatedItem>
        <About AboutReference={AboutRef}/> 
      </AnimatedItem>
      <AnimatedItem>
        <Skills SkillsReference={SkillsRef}/> 
      </AnimatedItem>
      <AnimatedItem>
        <Projects ProjectsReference={ProjectsRef}/> 
      </AnimatedItem>
      <AnimatedItem>
        <Contact ContactReference={ContactRef}/> 
      </AnimatedItem>
    </>
  )
}

export default App