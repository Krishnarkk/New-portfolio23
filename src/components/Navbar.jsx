import React from 'react'
import styled from 'styled-components'
const Section=styled.div`
justify-content:center;
display:flex;
`
const Container = styled.div`
   width:1200px;
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:10px 0px;
`
const Links=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:10px;
`
const Logo=styled.img`
  height:60px;
`;
const Icon=styled.img`
   width:20px;
   cursor:pointer;
`
const Icons=styled.div`
  display:flex;
  align-items:center;
  gap:20px;

`
const List=styled.ul`
  display:flex;
  gap:20px;
  list-style:none;

`
const ListItem=styled.li`
  cursor:pointer
`
const Button=styled.button`
  width:100px;
  padding:10px;
  background-color:#da4ea2;
  color:white; 
  border:none;
  border-radius:5px;
  cursor:pointer;
`
const Navbar = () => {
  return (
    <Section>    
    <Container>
        <Links>
        <Logo src="../../public/img/Kris.png"/>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Work</ListItem>
            <ListItem>Contact</ListItem>
        </List>
        </Links>
        <Icons>
            <Icon src="../../public/img/search.png"/>
            <Button>Hire Now</Button>
        </Icons>
    </Container>
    </Section>


  )
}

export default Navbar