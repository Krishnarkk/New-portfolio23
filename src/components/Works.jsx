import React from 'react'
import styled from 'styled-components'
const data=[
  "Web design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
 ]

const Section=styled.div`
 height:100vh;
 scroll-snap-align:center;
  display:flex;
  justify-content:center;
`
const Container=styled.div`
 width:1200px;
 display:flex;
 justify-content:space-between;
 scroll-snap-align:center;
 

`
const Left=styled.div`
  flex:1;
  display:flex;
  align-items:center;
  position:relative;
  

`
const List=styled.ul`
 list-style:none;
 display:flex;
 flex-direction:column;
 gap:20px;
 postition:relative;

`
const ListItem=styled.li`
  font-size:80px;
  font-weight:bolder;
  cursor:pointer;
  color:transparent;
  -webkit-text-stroke:1px whitesmoke;
  position:relative;

  ::after{
    content:"${(props)=>props.text}";
    position:absolute;
    top:0;
    left:0;
    color:pink;
    width:0;
    overflow:hidden;
    white-space:nowrap;
 
 
  }
  &:hover{
    ::after{
      animation:moveText 0.5s linear both;
      @keyframes moveText{
        to{
         width:100%;
        }
      }
    }
  }

`
const Right=styled.div`
flex:1;

`

const Works = () => {
  console.log(data)
  return (
    <Section>
      <Container>
        <Left>
             <List>
              {
                data.map((item)=>(
                  <ListItem key={item} text={item}>{item}</ListItem>
                ))
              }
            
             </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works