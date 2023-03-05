import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
const Section=styled.div`
 height:100vh;
 scroll-snap-align:center;
 display:flex;
 justify-content:space-between;
 flex-direction:column;
 align-items:center;
`
const Container=styled.div`
  height:100vh;
  scroll-snap-align:center;
  width:1200px;
  display:flex;
  justify-content:space-between;
`
const Left=styled.div`
  flex:2;
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap:0px;
`

const Title=styled.h1`
  font-size:64px;

`
const WhatWeDo=styled.div`
  display:flex;
  align-items:center;
  gap:4px; 
`
const Line=styled.img`
  height:5px;
`
const SubTitle=styled.h2`
  color:#da4ea2;
`
const Desc=styled.p`
  font-size:23px;
  color:lightgray;
`
const Button=styled.button`
  background-color:#da4ea2;
  color:white;
  font-weight:500;
  border-radius:5px;
  width:100px;
  padding:10px;
  cursor:pointer;
  border:none;
   
  
`
const Right=styled.div`
flex:3;
position:relative;
  
`
const Img=styled.img`
  width:800px;
  height:600px;
  object-fit:contain;
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  margin:auto;
  animation:animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform:translateY(20px);
    }
    
  }
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think,Make and Solve</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png"/>
            <SubTitle>What we do</SubTitle>
          </WhatWeDo>
          <Desc>We enjoy creating delightful content and work , digital colorful experience</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
        <Img src="../../public/img/moon.png"/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero