import React from 'react'
import styled from 'styled-components'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import './App.css'
const Container=styled.div`
 height:100vh;
 scroll-snap-type:y mandatory;
 scroll-behaviour:smooth;
 overflow-y:auto;
 scroll-bar-width:none;
 background-image:url('../public/img/bg.jpeg');
 color:white;
 &::-webkit-scrollbar{
  display:none;
 }
`
const App = () => {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App