import React from 'react'
import styled from 'styled-components'
const Section=styled.div`
 height:100vh;
 scroll-snap-align:center;
 display:flex;
 justify-content:center;
`
const Container=styled.div`
  height:100vh;
  scroll-snap-align:center;
  width:1200px;
  display:flex;
  justify-content:space-between;
`
const Left=styled.div`
  flex:1;
  
`

const Right=styled.div`
flex:1;
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
  width:120px;
  padding:10px;
  cursor:pointer;
  border:none;
`


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model */}

        </Left>
        <Right>
        <Title>Think Outside the box</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png"/>
            <SubTitle>Who we are..!</SubTitle>
          </WhatWeDo>
          <Desc>A creative group of designers,creators and developers having passion for arts....</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who